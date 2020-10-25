import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const readFileProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// Path 
	const regexPath = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}path\\s*:.*");
	const path = new vscode.CompletionItem("path");
	path.insertText = "path:";
	path.documentation = "Path (Mandatory)";
	path.commitCharacters = [ Utils.NewLine ];
	completionItems.push(path);

}