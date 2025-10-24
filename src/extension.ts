import * as vscode from 'vscode';
import { TQLSemanticTokensProvider } from './tokenProvider';
import { legend } from './tokenLegend';

let tokenProvider: TQLSemanticTokensProvider;

export async function activate(context: vscode.ExtensionContext) {
  console.log('TQL extension activating...');

  // Initialize token provider
  tokenProvider = new TQLSemanticTokensProvider();

  try {
    await tokenProvider.initialize(context);

    // Register semantic tokens provider
    const disposable = vscode.languages.registerDocumentSemanticTokensProvider(
      { language: 'tql' },
      tokenProvider,
      legend,
    );

    context.subscriptions.push(disposable);

    console.log('TQL extension activated successfully');
  } catch (error) {
    console.error('Failed to activate TQL extension:', error);
    vscode.window.showErrorMessage(
      `Failed to activate TQL extension: ${error}`,
    );
  }
}

export function deactivate() {
  console.log('TQL extension deactivated');
}
