import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const sqlProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// driver
	const regexDriver = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}driver\\s*:.*");
	const driver = new vscode.CompletionItem("driver");
	driver.kind = vscode.CompletionItemKind.Enum;
	driver.insertText = new vscode.SnippetString("driver: ${1|mysql,postgres,oracle,odbc|}");
	driver.documentation = "Driver (Mandatory)";
	driver.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexDriver) ) {
		completionItems.push(driver);
	}

	// dsn
	const regexDSN = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}dsn\\s*:.*");
	const dsn = new vscode.CompletionItem("dsn");
	dsn.insertText = "dsn: \"user:password@(localhost:3306)/venom\"";
	dsn.documentation = "DSN (Mandatory)";
	dsn.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexDSN) ) {
		completionItems.push(dsn);
	}

	// commands
	const regexCommands = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}commands\\s*:.*");
	const commands = new vscode.CompletionItem("commands");
	commands.insertText = "commands: \"\"";
	commands.documentation = "Commands (Optional)";
	commands.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexCommands) ) {
		completionItems.push(commands);
	}

	// file
	const regexFile = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}file\\s*:.*");
	const file = new vscode.CompletionItem("file");
	file.insertText = "file: \"\"";
	file.documentation = "File (Optional)";
	file.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexFile) ) {
		completionItems.push(file);
	}
}