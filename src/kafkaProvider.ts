import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const kafkaProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// addrs
	const regexAddrs = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}addrs\\s*:.*");
	const addrs = new vscode.CompletionItem("addrs");
	addrs.insertText = "addrs:";
	addrs.documentation = "Addrs (Optional)";
	addrs.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexAddrs) ) {
		completionItems.push(addrs);
	}

	// with_tls
	const regexWithTLS = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}with_tls\\s*:.*");
	const with_tls = new vscode.CompletionItem("with_tls");
	with_tls.insertText = "with_tls:";
	with_tls.documentation = "with_tls (Optional)";
	with_tls.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexWithTLS) ) {
		completionItems.push(with_tls);
	}

	// with_sasl
	const regexWithSASL = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}with_sasl\\s*:.*");
	const with_sasl = new vscode.CompletionItem("with_sasl");
	with_sasl.insertText = "with_sasl:";
	with_sasl.documentation = "with_sasl (Optional)";
	with_sasl.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexWithSASL) ) {
		completionItems.push(with_sasl);
	}

	// with_sasl_handshaked
	const regexWithSASLHandshaked = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}with_sasl_handshaked\\s*:.*");
	const with_sasl_handshaked = new vscode.CompletionItem("with_sasl_handshaked");
	with_sasl_handshaked.insertText = "with_sasl_handshaked:";
	with_sasl_handshaked.documentation = "with_sasl_handshaked (Optional)";
	with_sasl_handshaked.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexWithSASLHandshaked) ) {
		completionItems.push(with_sasl_handshaked);
	}

	// user
	const regexUser = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}user\\s*:.*");
	const user = new vscode.CompletionItem("user");
	user.insertText = "user:";
	user.documentation = "user (Optional)";
	user.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexUser) ) {
		completionItems.push(user);
	}

	// password
	const regexPassword = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}password\\s*:.*");
	const password = new vscode.CompletionItem("password");
	password.insertText = "password:";
	password.documentation = "password (Optional)";
	password.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexPassword) ) {
		completionItems.push(password);
	}

	// kafka_version
	const regexKafkaVersion = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}kafka_version\\s*:.*");
	const kafka_version = new vscode.CompletionItem("kafka_version");
	kafka_version.insertText = "kafka_version:";
	kafka_version.documentation = "kafka_version (Optional)";
	kafka_version.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexKafkaVersion) ) {
		completionItems.push(kafka_version);
	}

	// client_type
	const regexClientType = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}client_type\\s*:.*");
	const client_type = new vscode.CompletionItem("client_type");
	client_type.kind = vscode.CompletionItemKind.Enum;
	client_type.insertText = new vscode.SnippetString("client_type: ${1|producer,consumer|}");
	client_type.documentation = "client_type (Optional)";
	client_type.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexClientType) ) {
		completionItems.push(client_type);
	}

	// - CONSUMER
	// group_id
	const regexGroupId = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}group_id\\s*:.*");
	const group_id = new vscode.CompletionItem("group_id");
	group_id.insertText = "group_id:";
	group_id.documentation = "group_id (Optional)";
	group_id.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexGroupId) ) {
		completionItems.push(group_id);
	}

	// topics
	const regexTopics = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}topics\\s*:.*");
	const topics = new vscode.CompletionItem("topics");
	topics.insertText = "topics:";
	topics.documentation = "topics (Optional)";
	topics.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexTopics) ) {
		completionItems.push(topics);
	}

	// timeout
	/*
	const regexTimeout = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}timeout\\s*:.*");
	const timeout = new vscode.CompletionItem("timeout");
	timeout.insertText = "timeout:";
	timeout.documentation = "timeout (Optional)";
	timeout.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexTimeout) ) {
		completionItems.push(timeout);
	}
	*/

	// message_limit
	const regexMessageLimit = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}message_limit\\s*:.*");
	const message_limit = new vscode.CompletionItem("message_limit");
	message_limit.insertText = "message_limit:";
	message_limit.documentation = "message_limit (Optional)";
	message_limit.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexMessageLimit) ) {
		completionItems.push(message_limit);
	}

	// initial_offset
	const regexInitialOffset = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}initial_offset\\s*:.*");
	const initial_offset = new vscode.CompletionItem("initial_offset");
	initial_offset.insertText = "initial_offset:";
	initial_offset.documentation = "initial_offset (Optional)";
	initial_offset.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexInitialOffset) ) {
		completionItems.push(initial_offset);
	}

	// mark_offset
	const regexMarkOffset = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}mark_offset\\s*:.*");
	const mark_offset = new vscode.CompletionItem("mark_offset");
	mark_offset.insertText = "mark_offset:";
	mark_offset.documentation = "mark_offset (Optional)";
	mark_offset.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexMarkOffset) ) {
		completionItems.push(mark_offset);
	}

	// - PRODUCER
	// messages
	const regexMessages = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}messages\\s*:.*");
	const messages = new vscode.CompletionItem("messages");
	messages.insertText = "messages:";
	messages.documentation = "messages (Optional)";
	messages.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexMessages) ) {
		completionItems.push(messages);
	}

	// messages_file
	const regexMessagesFile = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}messages_file\\s*:.*");
	const messages_file = new vscode.CompletionItem("messages_file");
	messages_file.insertText = "messages_file:";
	messages_file.documentation = "messages_file (Optional)";
	messages_file.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexMessagesFile) ) {
		completionItems.push(messages_file);
	}
}