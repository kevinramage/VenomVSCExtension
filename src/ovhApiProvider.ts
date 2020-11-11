import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const ovhApiProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// method
	const regexMethod = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}method\\s*:.*");
	const method = new vscode.CompletionItem("method");
	method.insertText = "method:";
	method.documentation = "method (Optional)";
	method.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexMethod) ) {
		completionItems.push(method);
	}

	// path
	const regexPath = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}path\\s*:.*");
	const path = new vscode.CompletionItem("path");
	path.insertText = "path: /";
	path.documentation = "path (Mandatory)";
	path.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexPath) ) {
		completionItems.push(path);
	}

	// noAuth
	const regexNoAuth = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}noAuth\\s*:.*");
	const noAuth = new vscode.CompletionItem("noAuth");
	noAuth.insertText = "noAuth:";
	noAuth.documentation = "noAuth (Optional)";
	noAuth.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexNoAuth) ) {
		completionItems.push(noAuth);
	}

	// body
	const regexBody = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}body\\s*:.*");
	const body = new vscode.CompletionItem("body");
	body.insertText = "body:";
	body.documentation = "body (Optional)";
	body.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexBody) ) {
		completionItems.push(body);
	}

	// bodyFile
	const regexBodyFile = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}bodyFile\\s*:.*");
	const bodyFile = new vscode.CompletionItem("bodyFile");
	bodyFile.insertText = "bodyFile:";
	bodyFile.documentation = "bodyFile (Optional)";
	bodyFile.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexBodyFile) ) {
		completionItems.push(bodyFile);
	}

	// headers
	const regexHeaders = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}headers\\s*:.*");
	const headers = new vscode.CompletionItem("headers");
	headers.insertText = "headers:";
	headers.documentation = "headers (Optional)";
	headers.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexHeaders) ) {
		completionItems.push(headers);
	}
}