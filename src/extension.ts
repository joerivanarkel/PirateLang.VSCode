import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {

    const LibraryProvider = vscode.languages.registerCompletionItemProvider({ language: 'pirate', scheme: 'file' }, {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const completionItem = new vscode.CompletionItem('IO', vscode.CompletionItemKind.Class);

            return [
                completionItem
            ]
        }
    });

    const IOLibraryProvider = vscode.languages.registerCompletionItemProvider({ language: 'pirate', scheme: 'file' }, {
        provideCompletionItems(document, position, token, context) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (!linePrefix.endsWith('IO.')) {
				return undefined;
			}

            return [
                new vscode.CompletionItem('print', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('read', vscode.CompletionItemKind.Method),
            ]
        }},
        '.'
    );
    
	context.subscriptions.push(LibraryProvider, IOLibraryProvider);

}