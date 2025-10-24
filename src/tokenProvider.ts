import * as vscode from 'vscode';
import {
  Language,
  Parser,
  Query,
  type QueryCapture,
  type Node as TreeSitterNode,
} from 'web-tree-sitter';
import { legend, captureToTokenType, tokenTypes } from './tokenLegend';

export class TQLSemanticTokensProvider
  implements vscode.DocumentSemanticTokensProvider
{
  private parser: Parser | null = null;
  private highlightQuery: Query | null = null;
  private injectionQuery: Query | null = null;
  private yamlParser: Parser | null = null;
  private yamlHighlightQuery: Query | null = null;

  async initialize(context: vscode.ExtensionContext) {
    // Initialize parser
    await Parser.init();
    this.parser = new Parser();

    // Load TQL language
    const wasmPath = vscode.Uri.joinPath(
      context.extensionUri,
      'parsers',
      'tree-sitter-tql.wasm',
    );
    const wasmBinary = await vscode.workspace.fs.readFile(wasmPath);
    const language = await Language.load(wasmBinary);
    this.parser.setLanguage(language);

    // Load highlight queries from tree-sitter-tql
    const queryPath = vscode.Uri.joinPath(
      context.extensionUri,
      'queries',
      'tql',
      'highlights.scm',
    );
    const queryText = await vscode.workspace.fs.readFile(queryPath);
    const queryString = Buffer.from(queryText).toString('utf8');
    this.highlightQuery = new Query(language, queryString);

    // Load injection queries (e.g., YAML frontmatter)
    const injectionPath = vscode.Uri.joinPath(
      context.extensionUri,
      'queries',
      'tql',
      'injections.scm',
    );
    const injectionText = await vscode.workspace.fs.readFile(injectionPath);
    const injectionString = Buffer.from(injectionText).toString('utf8');
    this.injectionQuery = new Query(language, injectionString);

    // Load YAML language for frontmatter highlighting
    const yamlWasmPath = vscode.Uri.joinPath(
      context.extensionUri,
      'parsers',
      'tree-sitter-yaml.wasm',
    );
    const yamlWasm = await vscode.workspace.fs.readFile(yamlWasmPath);
    const yamlLanguage = await Language.load(yamlWasm);
    this.yamlParser = new Parser();
    this.yamlParser.setLanguage(yamlLanguage);

    const yamlHighlightPath = vscode.Uri.joinPath(
      context.extensionUri,
      'queries',
      'yaml',
      'highlights.scm',
    );
    const yamlHighlightText = await vscode.workspace.fs.readFile(
      yamlHighlightPath,
    );
    const yamlHighlightString = Buffer.from(yamlHighlightText).toString('utf8');
    this.yamlHighlightQuery = new Query(yamlLanguage, yamlHighlightString);
  }

  async provideDocumentSemanticTokens(
    document: vscode.TextDocument,
    token: vscode.CancellationToken,
  ): Promise<vscode.SemanticTokens> {
    if (!this.parser || !this.highlightQuery) {
      return new vscode.SemanticTokens(new Uint32Array());
    }

    const tokensBuilder = new vscode.SemanticTokensBuilder(legend);

    try {
      // Parse the document
      const tree = this.parser.parse(document.getText());
      if (!tree) {
        return tokensBuilder.build();
      }

      // Execute highlight query
      const captures = this.highlightQuery.captures(tree.rootNode);
      this.addCapturesToBuilder(document, tokensBuilder, captures);

      // Handle injected regions (e.g., YAML frontmatter)
      await this.addInjectionTokens(document, tokensBuilder, tree.rootNode);
    } catch (error) {
      console.error('Error providing semantic tokens:', error);
    }

    return tokensBuilder.build();
  }

  private async addInjectionTokens(
    document: vscode.TextDocument,
    builder: vscode.SemanticTokensBuilder,
    root: TreeSitterNode,
  ) {
    if (
      !this.injectionQuery ||
      !this.yamlParser ||
      !this.yamlHighlightQuery
    ) {
      return;
    }

    const matches = this.injectionQuery.matches(root);

    for (const match of matches) {
      const languageId = match.setProperties?.['injection.language'];
      if (languageId !== 'yaml') {
        continue;
      }

      const contentCapture = match.captures.find(
        (capture) => capture.name === 'injection.content',
      );
      if (!contentCapture) {
        continue;
      }

      const contentNode = contentCapture.node;
      const startIndex = contentNode.startIndex;
      const endIndex = contentNode.endIndex;

      const sliceText = document.getText(
        new vscode.Range(
          document.positionAt(startIndex),
          document.positionAt(endIndex),
        ),
      );

      const yamlTree = this.yamlParser.parse(sliceText);
      if (!yamlTree) {
        continue;
      }

      const yamlCaptures = this.yamlHighlightQuery.captures(
        yamlTree.rootNode,
      );
      this.addCapturesToBuilder(
        document,
        builder,
        yamlCaptures,
        startIndex,
      );
    }
  }

  private addCapturesToBuilder(
    document: vscode.TextDocument,
    builder: vscode.SemanticTokensBuilder,
    captures: QueryCapture[],
    baseOffset = 0,
  ) {
    for (const capture of captures) {
      const { node, name } = capture;
      const tokenType = captureToTokenType[name];

      if (!tokenType || !tokenTypes.includes(tokenType)) {
        continue;
      }

      this.pushNodeTokens(document, builder, node, tokenType, baseOffset);
    }
  }

  private pushNodeTokens(
    document: vscode.TextDocument,
    builder: vscode.SemanticTokensBuilder,
    node: TreeSitterNode,
    tokenType: string,
    baseOffset = 0,
  ) {
    const startIndex = node.startIndex + baseOffset;
    const endIndex = node.endIndex + baseOffset;

    const startPos = document.positionAt(startIndex);
    const endPos = document.positionAt(endIndex);

    if (startPos.line === endPos.line) {
      builder.push(
        startPos.line,
        startPos.character,
        Math.max(endPos.character - startPos.character, 0),
        tokenTypes.indexOf(tokenType),
        0,
      );
      return;
    }

    for (let line = startPos.line; line <= endPos.line; line++) {
      const lineStartChar = line === startPos.line ? startPos.character : 0;
      const lineEndChar =
        line === endPos.line
          ? endPos.character
          : document.lineAt(line).text.length;

      if (lineEndChar > lineStartChar) {
        builder.push(
          line,
          lineStartChar,
          lineEndChar - lineStartChar,
          tokenTypes.indexOf(tokenType),
          0,
        );
      }
    }
  }
}
