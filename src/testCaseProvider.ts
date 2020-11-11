import * as vscode from 'vscode';
import { AutoCompleteContext, PARENT, TAB } from './autoCompleteContext';
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
		testCaseName.kind = vscode.CompletionItemKind.Constructor;
		testCaseName.detail = "Mandatory";
		testCaseName.insertText = "name: testCase1";
		testCaseName.documentation = "Test case name";
		testCaseName.commitCharacters = [Utils.NewLine];

		// Test case steps
		const regexSteps = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length + "}steps\\s*:.*");
		const testCaseSteps = new vscode.CompletionItem("steps");
		testCaseSteps.kind = vscode.CompletionItemKind.Class;
		testCaseSteps.keepWhitespace = true;
		testCaseSteps.detail = "Mandatory";
		testCaseSteps.insertText = "steps:" + Utils.NewLine + autoCompleteContext.tab + "- ";
		testCaseSteps.documentation = "Test case steps";
		testCaseSteps.commitCharacters = [Utils.NewLine];

		// Context
		const regexContext = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length + "}context\\s*:.*");
		const testCaseContext = new vscode.CompletionItem("context");
		testCaseContext.kind = vscode.CompletionItemKind.Module;
		testCaseContext.keepWhitespace = true;
		testCaseContext.detail = "Optionnal";
		testCaseContext.insertText = "context:" + Utils.NewLine + autoCompleteContext.tab + autoCompleteContext.tab;
		testCaseContext.documentation = "Test case context";
		testCaseContext.commitCharacters = [Utils.NewLine];

		if ( autoCompleteContext.isAutoCompletePossible &&
			 autoCompleteContext.currentParent == PARENT.TESTCASES &&
			 autoCompleteContext.currentTab ==  TAB.TESTCASE ) {
			
			// Name
			if ( autoCompleteContext.localContext.match(regexName) == null ) {
				completionItems.push(testCaseName);
			}

			// steps
			if ( autoCompleteContext.localContext.match(regexSteps) == null ) {
				completionItems.push(testCaseSteps);
			}

			// context
			if ( autoCompleteContext.localContext.match(regexContext) == null ) {
				completionItems.push(testCaseContext);
			}
		}

		return completionItems;
	}
});