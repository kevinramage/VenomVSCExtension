import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const smtpProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// withtls
	const regexWithTLS = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}withtls\\s*:.*");
	const withtls = new vscode.CompletionItem("withtls");
	withtls.insertText = "withtls: true";
	withtls.documentation = "With TLS (Optional)";
	withtls.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexWithTLS) ) {
		completionItems.push(withtls);
	}

	// host
	const regexHost = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}host\\s*:.*");
	const host = new vscode.CompletionItem("host");
	host.insertText = "host:";
	host.documentation = "Host (Mandatory)";
	host.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexHost) ) {
		completionItems.push(host);
	}

	// port
	const regexPort = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}port\\s*:.*");
	const port = new vscode.CompletionItem("port");
	port.insertText = "port: 465";
	port.documentation = "Port (Optional)";
	port.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexPort) ) {
		completionItems.push(port);
	}

	// user
	const regexUser = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}user\\s*:.*");
	const user = new vscode.CompletionItem("user");
	user.insertText = "user:";
	user.documentation = "user (Optional)";
	user.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexUser) ) {
		completionItems.push(user);
	}

	// password
	const regexPassword = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}password\\s*:.*");
	const password = new vscode.CompletionItem("password");
	password.insertText = "password:";
	password.documentation = "Password (Optional)";
	password.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexPassword) ) {
		completionItems.push(password);
	}

	// to
	const regexTo = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}to\\s*:.*");
	const to = new vscode.CompletionItem("to");
	to.insertText = "to:";
	to.documentation = "To (Mandatory)";
	to.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexTo) ) {
		completionItems.push(to);
	}

	// from
	const regexFrom = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}from\\s*:.*");
	const from = new vscode.CompletionItem("from");
	from.insertText = "from:";
	from.documentation = "From (Mandatory)";
	from.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexFrom) ) {
		completionItems.push(from);
	}

	// subject
	const regexSubject = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}subject\\s*:.*");
	const subject = new vscode.CompletionItem("subject");
	subject.insertText = "subject:";
	subject.documentation = "Subject (Optional)";
	subject.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexSubject) ) {
		completionItems.push(subject);
	}

	// body
	const regexBody = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}body\\s*:.*");
	const body = new vscode.CompletionItem("body");
	body.insertText = "body:";
	body.documentation = "Body (Mandatory)";
	body.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.documentText.match(regexBody) ) {
		completionItems.push(body);
	}
}