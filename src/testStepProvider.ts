import * as vscode from 'vscode';
import { AutoCompleteContext, PARENT } from './autoCompleteContext';
import { dbFixturesProvider } from './dbFixturesProvider';
import { execProvider } from './execProvider';
import { grpcProvider } from './grpcProvider';
import { httpProvider } from './httpProvider';
import { imapProvider } from './imapProvider';
import { kafkaProvider } from './kafkaProvider';
import { ovhApiProvider } from './ovhApiProvider';
import { rabbitMQProvider } from './rabbitmqProvider';
import { readFileProvider } from './readFileProvider';
import { redisProvider } from './redisProvider';
import { smtpProvider } from './smtpProvider';
import { sqlProvider } from './sqlProvider';
import { sshProvider } from './sshProvider';
import { Utils } from './utils';
import { webProvider } from './webProvider';

export const testStepProvider = vscode.languages.registerCompletionItemProvider('yaml', {
	
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
		const completionItems : vscode.CompletionItem[] = [];

		// AutoComplete context
		const autoCompleteContext = new AutoCompleteContext();
		autoCompleteContext.init(document, position);

		// Type
		const regexType = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}type\\s*:.*");
		const testStepType = new vscode.CompletionItem("type");
		testStepType.insertText = new vscode.SnippetString("type: ${1|dbfixtures,exec,http,imap,kafka,ovhapi,readfile,redis,smtp,ssh,web,grpc,rabbitmq,sql|}");
		testStepType.documentation = "Type (Default exec)";
		testStepType.commitCharacters = [ Utils.NewLine ];

		// Timeout
		const regexTimeout = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}timeout\\s*:.*");
		const testStepTimeout = new vscode.CompletionItem("timeout");
		testStepTimeout.insertText = "timeout";
		testStepTimeout.documentation = "Step timeout";
		testStepTimeout.commitCharacters = [ Utils.NewLine ];

		// Delay
		const regexDelay = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}delay\\s*:.*");
		const testStepDelay = new vscode.CompletionItem("delay");
		testStepDelay.insertText = "delay";
		testStepDelay.documentation = "delay";
		testStepDelay.commitCharacters = [ Utils.NewLine ];

		// Retry
		const regexRetry = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}retry\\s*:.*");
		const testStepRetry = new vscode.CompletionItem("retry");
		testStepRetry.insertText = "retry";
		testStepRetry.documentation = "Retry";
		testStepRetry.commitCharacters = [ Utils.NewLine ];

		// Assertions
		const regexAssertions = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}assertions\\s*:.*");
		const testStepAssertions = new vscode.CompletionItem("assertions");
		testStepAssertions.insertText = "assertions: " + Utils.NewLine + "- ";
		testStepAssertions.documentation = "Assertions";
		testStepAssertions.commitCharacters = [ Utils.NewLine ];

		if ( autoCompleteContext.isAutoCompletePossible &&
			 autoCompleteContext.currentParent == PARENT.STEPS &&
			 autoCompleteContext.currentTab == 2 ) {

			// Type
			if ( !autoCompleteContext.localText.match(regexType) ) {
				completionItems.push(testStepType);
			}

			// Timeout
			if ( !autoCompleteContext.localText.match(regexTimeout) ) {
				completionItems.push(testStepTimeout);
			}

			// Delay
			if ( !autoCompleteContext.localText.match(regexDelay) ) {
				completionItems.push(testStepDelay);
			}

			// Retry
			if ( !autoCompleteContext.localText.match(regexRetry) ) {
				completionItems.push(testStepRetry);
			}

			// dbfixtures
			if ( autoCompleteContext.type == "dbfixtures" ) {
				dbFixturesProvider(completionItems, autoCompleteContext);
			}
			// exec
			else if ( autoCompleteContext.type == "" || autoCompleteContext.type == "exec" ) {
				execProvider(completionItems, autoCompleteContext);
			}
			// http
			else if ( autoCompleteContext.type == "http" ) {
				httpProvider(completionItems, autoCompleteContext);
			}
			// imap
			else if ( autoCompleteContext.type == "imap" ) {
				imapProvider(completionItems, autoCompleteContext);
			}
			// kafka
			else if ( autoCompleteContext.type == "kafka" ) {
				kafkaProvider(completionItems, autoCompleteContext);
			}
			// ovhapi
			else if ( autoCompleteContext.type == "ovhapi" ) {
				ovhApiProvider(completionItems, autoCompleteContext);
			}
			// readfile
			else if ( autoCompleteContext.type == "readfile" ) {
				readFileProvider(completionItems, autoCompleteContext);
			}
			// redis
			else if ( autoCompleteContext.type == "redis" ) {
				redisProvider(completionItems, autoCompleteContext);
			}
			// smtp
			else if ( autoCompleteContext.type == "smtp" ) {
				smtpProvider(completionItems, autoCompleteContext);
			}
			// ssh
			else if ( autoCompleteContext.type == "ssh" ) {
				sshProvider(completionItems, autoCompleteContext);
			}
			// web
			else if ( autoCompleteContext.type == "web" ) {
				webProvider(completionItems, autoCompleteContext);
			}
			// grpc
			else if ( autoCompleteContext.type == "grpc" ) {
				grpcProvider(completionItems, autoCompleteContext);
			}
			// rabbitmq
			else if ( autoCompleteContext.type == "rabbitmq" ) {
				rabbitMQProvider(completionItems, autoCompleteContext);
			}
			// sql
			else if ( autoCompleteContext.type == "sql" ) {
				sqlProvider(completionItems, autoCompleteContext);
			}

			// Assertions
			if ( !autoCompleteContext.localText.match(regexAssertions) ) {
				completionItems.push(testStepAssertions);
			}
		}

		return completionItems;
	}
});