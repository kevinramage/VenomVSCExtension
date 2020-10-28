import * as vscode from 'vscode';
import { AutoCompleteContext, PARENT, TAB } from './autoCompleteContext';
import { Utils } from './utils';

export const testSuiteProvider = vscode.languages.registerCompletionItemProvider('yaml', {
	
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
		const completionItems : vscode.CompletionItem[] = [];

		// AutoComplete context
		const autoCompleteContext = new AutoCompleteContext();
		autoCompleteContext.init(document, position);

		// Test suite name
		const testSuiteName = new vscode.CompletionItem("name");
		testSuiteName.kind = vscode.CompletionItemKind.Constructor;
		testSuiteName.detail = "Mandatory";
		testSuiteName.insertText = "name: testSuite1";
		testSuiteName.documentation = new vscode.MarkdownString("Test suite name", true);
		testSuiteName.commitCharacters = [ Utils.NewLine ];

		// Test cases
		const testCases = new vscode.CompletionItem("testCases");
		testCases.kind = vscode.CompletionItemKind.Class;
		testCases.detail = "Mandatory";
		testCases.insertText = "testcases:" + Utils.NewLine + "- ";
		testCases.documentation = "Test cases";
		testCases.commitCharacters = [ Utils.NewLine ];

		// Version
		const testSuiteVersion = new vscode.CompletionItem("version");
		testSuiteVersion.kind = vscode.CompletionItemKind.Property;
		testSuiteVersion.detail = "Optionnal";
		testSuiteVersion.insertText = "version: 0.28.0";
		testSuiteVersion.documentation = "Version";
		testSuiteVersion.commitCharacters = [ Utils.NewLine ];

		// Variables
		const testSuiteVariables = new vscode.CompletionItem("vars");
		testSuiteVariables.kind = vscode.CompletionItemKind.Class;
		testSuiteVariables.detail = "Optionnal";
		testSuiteVariables.insertText = "vars:" + Utils.NewLine + "- ";
		testSuiteVariables.documentation = "Variables";
		testSuiteVariables.commitCharacters = [ Utils.NewLine ];

		// Regex
		const testSuiteNameRegex = /name:\s*[a-z|A-Z|0-9|\-|_|\.]*\s*\n/g;
		const testCasesRegex = /testcases:\s*\n/g;
		const testSuiteVersionRegex = /version:\s*[0-9|\.]*\s*\n/g;
		const testSuiteVarsRegex = /vars:\s*\n/g;

		if ( autoCompleteContext.isAutoCompletePossible &&
			 autoCompleteContext.currentParent == PARENT.NO_PARENT &&
			 autoCompleteContext.currentTab == TAB.TESTSUITE ) {
			if ( !document.getText().match(testSuiteNameRegex) ) {
				completionItems.push(testSuiteName);
			}
			if ( !document.getText().match(testCasesRegex)) {
				completionItems.push(testCases);
			}
			if ( !document.getText().match(testSuiteVersionRegex)) {
				completionItems.push(testSuiteVersion);
			}
			if ( !document.getText().match(testSuiteVarsRegex)) {
				completionItems.push(testSuiteVariables);
			}
		}

		return completionItems;
	}
});