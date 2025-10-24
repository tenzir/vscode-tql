import * as vscode from 'vscode';

// Define semantic token types supported by VS Code
export const tokenTypes = [
  'namespace', // module paths
  'class', // types
  'enum', // enums
  'interface', // interfaces
  'struct', // record types
  'typeParameter', // generic parameters
  'type', // general types
  'parameter', // function parameters
  'variable', // variables
  'property', // record fields
  'enumMember', // enum members
  'function', // functions
  'method', // methods
  'macro', // operators (pipeline, etc)
  'decorator', // metadata selectors
  'keyword', // language keywords
  'modifier', // modifiers
  'comment', // comments
  'string', // string literals
  'number', // number literals
  'regexp', // regex literals
  'operator', // operators
];

export const tokenModifiers = [
  'declaration',
  'definition',
  'readonly',
  'static',
  'deprecated',
  'abstract',
  'async',
  'modification',
  'documentation',
  'defaultLibrary',
];

export const legend = new vscode.SemanticTokensLegend(
  tokenTypes,
  tokenModifiers,
);

// Map tree-sitter highlight captures to VS Code semantic token types
export const captureToTokenType: { [key: string]: string } = {
  // Keywords
  keyword: 'keyword',
  'keyword.control': 'keyword',
  'keyword.operator': 'keyword',
  'keyword.function': 'keyword',

  // Functions & Operators
  function: 'function',
  'function.call': 'function',
  'function.builtin': 'function',
  'function.method': 'method',
  operator: 'operator',
  'operator.pipeline': 'operator',

  // Variables & Parameters
  variable: 'variable',
  'variable.builtin': 'variable',
  'variable.parameter': 'parameter',
  property: 'property',

  // Types
  type: 'type',
  'type.builtin': 'type',

  // Literals
  string: 'string',
  number: 'number',
  boolean: 'keyword',
  constant: 'variable',
  'constant.builtin': 'variable',
  label: 'variable',
  attribute: 'decorator',

  // Comments
  comment: 'comment',
  'comment.block': 'comment',
  'comment.line': 'comment',

  // Punctuation (usually not highlighted, but map for completeness)
  'punctuation.delimiter': 'operator',
  'punctuation.bracket': 'operator',
  'punctuation.special': 'operator',
};
