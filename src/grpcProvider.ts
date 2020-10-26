import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const grpcProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// Url
	const regexUrl = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}url\\s*:.*");
	const url = new vscode.CompletionItem("url");
	url.insertText = "url:";
	url.documentation = "Url (Mandatory)";
	url.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexUrl) ) {
		completionItems.push(url);
	}

	// Service
	const regexService = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}service\\s*:.*");
	const service = new vscode.CompletionItem("service");
	service.insertText = "service:";
	service.documentation = "Service (Mandatory)";
	service.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexService) ) {
		completionItems.push(service);
	}

	// Method
	const regexMethod = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}method\\s*:.*");
	const method = new vscode.CompletionItem("method");
	method.insertText = "method:";
	method.documentation = "Method (Mandatory)";
	method.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexMethod) ) {
		completionItems.push(method);
	}

	// Plaintext
	const regexPlaintext = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}plaintext\\s*:.*");
	const plaintext = new vscode.CompletionItem("plaintext");
	plaintext.insertText = "plaintext:";
	plaintext.documentation = "Plaintext (Mandatory)";
	plaintext.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexPlaintext) ) {
		completionItems.push(plaintext);
	}

	// Data
	const regexData = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}data\\s*:.*");
	const data = new vscode.CompletionItem("data");
	data.insertText = "data:";
	data.documentation = "Data (Mandatory)";
	data.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexData) ) {
		completionItems.push(data);
	}

	// Headers
	const regexHeaders = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}headers\\s*:.*");
	const headers = new vscode.CompletionItem("headers");
	headers.insertText = "headers:";
	headers.documentation = "Headers (Mandatory)";
	headers.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexHeaders) ) {
		completionItems.push(headers);
	}

	// connect_timeout
	const regexConnectTimeout = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}connect_timeout\\s*:.*");
	const connectTimeout = new vscode.CompletionItem("connect_timeout");
	connectTimeout.insertText = "connect_timeout:";
	connectTimeout.documentation = "Connect timeout (Mandatory)";
	connectTimeout.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexConnectTimeout) ) {
		completionItems.push(connectTimeout);
	}

	// default_fields
	const regexDefaultFields = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}default_fields\\s*:.*");
	const defaultFields = new vscode.CompletionItem("default_fields");
	defaultFields.insertText = "default_fields:";
	defaultFields.documentation = "Default fields (Mandatory)";
	defaultFields.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexDefaultFields) ) {
		completionItems.push(defaultFields);
	}

	// include_text_separator
	const regexIncludeTextSeparator = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}include_text_separator\\s*:.*");
	const includeTextSeparator = new vscode.CompletionItem("include_text_separator");
	includeTextSeparator.insertText = "include_text_separator:";
	includeTextSeparator.documentation = "Include text separator (Mandatory)";
	includeTextSeparator.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexIncludeTextSeparator) ) {
		completionItems.push(includeTextSeparator);
	}
}