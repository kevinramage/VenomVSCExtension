import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const sshProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// Host
	const regexHost = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}host\\s*:.*");
	const host = new vscode.CompletionItem("host");
	host.insertText = "host:";
	host.documentation = "Host (Mandatory)";
	host.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexHost) ) {
		completionItems.push(host);
	}

	// Command
	const regexCommand = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}command\\s*:.*");
	const command = new vscode.CompletionItem("command");
	command.insertText = "command:";
	command.documentation = "Command (Mandatory)";
	command.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexCommand) ) {
		completionItems.push(command);
	}

	// User
	const regexUser = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}user\\s*:.*");
	const user = new vscode.CompletionItem("user");
	user.insertText = "user:";
	user.documentation = "User (Optional)";
	user.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexUser) ) {
		completionItems.push(user);
	}

	// Password
	const regexPassword = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}password\\s*:.*");
	const password = new vscode.CompletionItem("password");
	password.insertText = "password:";
	password.documentation = "Password (Optional)";
	password.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexPassword) ) {
		completionItems.push(password);
	}

	// privatekey
	const regexPrivateKey = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}privatekey\\s*:.*");
	const privatekey = new vscode.CompletionItem("privatekey");
	privatekey.insertText = "privatekey:";
	privatekey.documentation = "Private Key (Optional)";
	privatekey.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexPrivateKey) ) {
		completionItems.push(privatekey);
	}
}