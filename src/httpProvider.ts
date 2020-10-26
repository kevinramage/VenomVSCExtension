import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const httpProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// Method
	const regexMethod = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}method\\s*:.*");
	const method = new vscode.CompletionItem("method");
	method.insertText = "method: GET" + Utils.NewLine;
	method.documentation = "Request method (Optional)";
	method.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexMethod) ) {
		completionItems.push(method);
	}

	// Url
	const regexUrl = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}url\\s*:.*");
	const url = new vscode.CompletionItem("url");
	url.insertText = "url:"
	url.documentation = "Url (Mandatory)";
	url.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexUrl) ) {
		completionItems.push(url);
	}

	// Unix sock
	const regexUnixSock = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}unix_sock\\s*:.*");
	const unixSock = new vscode.CompletionItem("unix_sock");
	unixSock.insertText = "unix_sock:"
	unixSock.documentation = "Unix Sock (Optional)";
	unixSock.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexUnixSock) ) {
		completionItems.push(unixSock);
	}

	// Path
	const regexPath = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}path\\s*:.*");
	const path = new vscode.CompletionItem("path");
	path.insertText = "path: /"
	path.documentation = "Path (Optional)";
	path.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexPath) ) {
		completionItems.push(path);
	}

	// Body
	const regexBody = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}body\\s*:.*");
	const body = new vscode.CompletionItem("body");
	body.insertText = "body: "
	body.documentation = "Body (Optional)";
	body.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexBody) ) {
		completionItems.push(body);
	}

	// Body file
	const regexBodyFile = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}bodyFile\\s*:.*");
	const bodyFile = new vscode.CompletionItem("bodyFile");
	bodyFile.insertText = "bodyFile: "
	bodyFile.documentation = "Body file (Optional)";
	bodyFile.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexBodyFile) ) {
		completionItems.push(bodyFile);
	}

	// Headers
	const regexHeaders = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}headers\\s*:.*");
	const headers = new vscode.CompletionItem("headers");
	headers.insertText = "headers: " + Utils.NewLine + autoCompleteContext.tab;
	headers.documentation = "Headers (Optional)";
	headers.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexHeaders) ) {
		completionItems.push(headers);
	}

	// Proxy
	const regexProxy = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}proxy\\s*:.*");
	const proxy = new vscode.CompletionItem("proxy");
	proxy.insertText = "proxy: "
	proxy.documentation = "Proxy (Optional)";
	proxy.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexProxy) ) {
		completionItems.push(proxy);
	}

	// Ignore verify SSL
	const regexIgnoreVerifySSL = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}ignore_verify_ssl\\s*:.*");
	const ignoreVerifySSL = new vscode.CompletionItem("ignore_verify_ssl");
	ignoreVerifySSL.insertText = "ignore_verify_ssl: false";
	ignoreVerifySSL.documentation = "Ignore verify SSL (Optional)";
	ignoreVerifySSL.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexIgnoreVerifySSL) ) {
		completionItems.push(ignoreVerifySSL);
	}

	// Basic auth user
	const regexBasicAuthUser = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}basic_auth_user\\s*:.*");
	const basicAuthUser = new vscode.CompletionItem("basic_auth_user");
	basicAuthUser.insertText = "basic_auth_user: ";
	basicAuthUser.documentation = "Basic auth user (Optional)";
	basicAuthUser.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexBasicAuthUser) ) {
		completionItems.push(basicAuthUser);
	}

	// Basic auth password
	const regexBasicAuthPassword = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}basic_auth_password\\s*:.*");
	const basicAuthPassword = new vscode.CompletionItem("basic_auth_password");
	basicAuthPassword.insertText = "basic_auth_password: ";
	basicAuthPassword.documentation = "Basic auth password (Optional)";
	basicAuthPassword.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexBasicAuthPassword) ) {
		completionItems.push(basicAuthPassword);
	}

	// No follow redirect
	const regexNoFollowRedirect = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}no_follow_redirect\\s*:.*");
	const noFollowRedirect = new vscode.CompletionItem("no_follow_redirect");
	noFollowRedirect.insertText = "no_follow_redirect: true";
	noFollowRedirect.documentation = "No follow redirect (Optional)";
	noFollowRedirect.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexNoFollowRedirect) ) {
		completionItems.push(noFollowRedirect);
	}

	// Skip body
	const regexSkipBody = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}skip_body\\s*:.*");
	const skipBody = new vscode.CompletionItem("skip_body");
	skipBody.insertText = "skip_body: false";
	skipBody.documentation = "Skip body (Optional)";
	skipBody.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexSkipBody) ) {
		completionItems.push(skipBody);
	}

	// Skip headers
	const regexSkipHeaders = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}skip_headers\\s*:.*");
	const skipHeaders = new vscode.CompletionItem("skip_headers");
	skipHeaders.insertText = "skip_headers: false";
	skipHeaders.documentation = "Skip headers (Optional)";
	skipHeaders.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexSkipHeaders) ) {
		completionItems.push(skipHeaders);
	}
}