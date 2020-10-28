import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const rabbitMQProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// addrs
	const regexAddrs = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}addrs\\s*:.*");
	const addrs = new vscode.CompletionItem("addrs");
	addrs.insertText = "addrs: \"amqp://localhost:5672\"";
	addrs.documentation = "Addrs (Optional)";
	addrs.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexAddrs) ) {
		completionItems.push(addrs);
	}

	// user
	const regexUser = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}user\\s*:.*");
	const user = new vscode.CompletionItem("user");
	user.insertText = "user:";
	user.documentation = "User (Optional)";
	user.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexUser) ) {
		completionItems.push(user);
	}

	// password
	const regexPassword = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}password\\s*:.*");
	const password = new vscode.CompletionItem("password");
	password.insertText = "password:";
	password.documentation = "Password (Optional)";
	password.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexPassword) ) {
		completionItems.push(password);
	}

	// clientType
	const regexClientType = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}clientType\\s*:.*");
	const clientType = new vscode.CompletionItem("clientType");
	clientType.kind = vscode.CompletionItemKind.Enum;
	clientType.insertText = new vscode.SnippetString("clientType: ${1|subscriber,publisher|}")
	clientType.documentation = "Client type (Mandatory)";
	clientType.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexClientType) ) {
		completionItems.push(clientType);
	}

	// qName
	const regexQName = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}qName\\s*:.*");
	const qName = new vscode.CompletionItem("qName");
	qName.insertText = "qName:";
	qName.documentation = "QName (Mandatory)";
	qName.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexQName) ) {
		completionItems.push(qName);
	}

	// routingKey
	const regexRoutingKey = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}routingKey\\s*:.*");
	const routingKey = new vscode.CompletionItem("routingKey");
	routingKey.insertText = "routingKey:";
	routingKey.documentation = "Routing key (Optional)";
	routingKey.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexRoutingKey) ) {
		completionItems.push(routingKey);
	}

	// exchangeType
	const regexExchangeType = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}exchangeType\\s*:.*");
	const exchangeType = new vscode.CompletionItem("exchangeType");
	exchangeType.insertText = "exchangeType:";
	exchangeType.documentation = "Exchange type (Optional)";
	exchangeType.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexExchangeType) ) {
		completionItems.push(exchangeType);
	}

	// exchange
	const regexExchange = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}exchange\\s*:.*");
	const exchange = new vscode.CompletionItem("exchange");
	exchange.insertText = "exchange:";
	exchange.documentation = "Exchange (Optional)";
	exchange.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexExchange) ) {
		completionItems.push(exchange);
	}

	// - Subscriber
	// messageLimit
	const regexMessageLimit = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}messageLimit\\s*:.*");
	const messageLimit = new vscode.CompletionItem("messageLimit");
	messageLimit.insertText = "messageLimit:";
	messageLimit.documentation = "Message limit (Optional)";
	messageLimit.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexMessageLimit) ) {
		completionItems.push(messageLimit);
	}

	// - Publisher
	// messages
	const regexMessages = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}messages\\s*:.*");
	const messages = new vscode.CompletionItem("messages");
	messages.insertText = "messages:";
	messages.documentation = "Messages (Optional)";
	messages.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexMessages) ) {
		completionItems.push(messages);
	}
}