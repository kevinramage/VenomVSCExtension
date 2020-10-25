import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const webProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// Actions
	const regexActions = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}actions\\s*:.*");
	const actions = new vscode.CompletionItem("actions");
	actions.insertText = "actions:" + Utils.NewLine + autoCompleteContext.tab;
	actions.documentation = "Actions (Mandatory)";
	actions.commitCharacters = [ Utils.NewLine ];
	completionItems.push(actions);
}