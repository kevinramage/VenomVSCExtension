import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const execProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// Script
	const regexScript = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}script\\s*:.*");
	const script = new vscode.CompletionItem("script");
	script.insertText = "script: ";
	script.documentation = "Exec script (Mandatory)";
	script.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexScript) ) {
		completionItems.push(script);
	}
}