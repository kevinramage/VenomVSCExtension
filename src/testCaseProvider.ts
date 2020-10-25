import * as vscode from 'vscode';
import { AutoCompleteContext, PARENT } from './autoCompleteContext';
import { Utils } from './utils';

export const testCaseProvider = vscode.languages.registerCompletionItemProvider('yaml', {
	
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
		const completionItems : vscode.CompletionItem[] = [];

		// AutoComplete context
		const autoCompleteContext = new AutoCompleteContext();
		autoCompleteContext.init(document, position);

		// Test case name
		const regexName = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length + "}name\\s*:.*");
		const testCaseName = new vscode.CompletionItem("name");
		testCaseName.insertText = "name: testCase1";
		testCaseName.documentation = "Test case name";
		testCaseName.commitCharacters = [Utils.NewLine];

		// Test case steps
		const regexSteps = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length + "}steps\\s*:.*");
		const testCaseSteps = new vscode.CompletionItem("steps");
		testCaseSteps.insertText = "steps:" + Utils.NewLine + "- ";
		testCaseSteps.documentation = "Test case steps";
		testCaseSteps.commitCharacters = [Utils.NewLine];

		// Context
		const regexContext = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length + "}context\\s*:.*");
		const testCaseContext = new vscode.CompletionItem("context");
		testCaseContext.insertText = "context:" + Utils.NewLine + autoCompleteContext.tab;
		testCaseContext.documentation = "Test case context";
		testCaseContext.commitCharacters = [Utils.NewLine];

		if ( autoCompleteContext.isAutoCompletePossible &&
			 autoCompleteContext.currentParent == PARENT.TESTCASES &&
			 autoCompleteContext.currentTab ==  1 ) {
			
			// Name
			if ( document.getText().match(regexName) == null ) {
				completionItems.push(testCaseName);
			}

			// steps
			if ( document.getText().match(regexSteps) == null ) {
				completionItems.push(testCaseSteps);
			}

			// context
			if ( document.getText().match(regexContext) == null ) {
				completionItems.push(testCaseContext);
			}
		}

		return completionItems;
	}
});