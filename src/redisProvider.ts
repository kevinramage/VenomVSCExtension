import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const redisProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// Commands
	const regexCommands = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}commands\\s*:.*");
	const commands = new vscode.CompletionItem("commands");
	commands.insertText = "commands:";
	commands.documentation = "Commands (Optional)";
	commands.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexCommands) ) {
		completionItems.push(commands);
	}

	// Path
	const regexPath = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}path\\s*:.*");
	const path = new vscode.CompletionItem("path");
	path.insertText = "path:";
	path.documentation = "Path (Optional)";
	path.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexPath) ) {
		completionItems.push(path);
	}
}