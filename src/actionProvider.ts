import * as vscode from 'vscode';
import { AutoCompleteContext, PARENT, TAB } from './autoCompleteContext';
import { Utils } from './utils';

export const actionProvider = vscode.languages.registerCompletionItemProvider('yaml', {
	
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
		const completionItems : vscode.CompletionItem[] = [];

		// AutoComplete context
		const autoCompleteContext = new AutoCompleteContext();
		autoCompleteContext.init(document, position);

		// Click
		const testCaseClick = new vscode.CompletionItem("click");
		testCaseClick.insertText = "click:" + Utils.NewLine;
		testCaseClick.documentation = "Click on HTML element";
		testCaseClick.commitCharacters = [Utils.NewLine];

		// Fill
		const testCaseFill = new vscode.CompletionItem("fill");
		testCaseFill.insertText = "fill:" + Utils.NewLine;
		testCaseFill.documentation = "Fill a HTML input element";
		testCaseFill.commitCharacters = [Utils.NewLine];

		// Find
		const testCaseFind = new vscode.CompletionItem("find");
		testCaseFind.insertText = "find: ";
		testCaseFind.documentation = "Identify a HTML element with CSS selector";
		testCaseFind.commitCharacters = [Utils.NewLine];

		// Navigate
		const testCaseNavigate = new vscode.CompletionItem("navigate");
		testCaseNavigate.insertText = "navigate:" + Utils.NewLine;
		testCaseNavigate.documentation = "Navigate to an url";
		testCaseNavigate.commitCharacters = [Utils.NewLine];

		// Wait
		const testCaseWait = new vscode.CompletionItem("wait");
		testCaseWait.insertText = "wait: ";
		testCaseWait.documentation = "Delay to wait (in second) before the next action";
		testCaseWait.commitCharacters = [Utils.NewLine];

		// ConfirmPopup
		const testCaseConfirmPopup = new vscode.CompletionItem("confirmPopup");
		testCaseConfirmPopup.insertText = "confirmPopup: true";
		testCaseConfirmPopup.documentation = "Click on confirm button on window modal dialog. Set this flag to true to activate this feature";
		testCaseConfirmPopup.commitCharacters = [Utils.NewLine];

		// CancelPopup
		const testCaseCancelPopup = new vscode.CompletionItem("cancelPopup");
		testCaseCancelPopup.insertText = "cancelPopup: true";
		testCaseCancelPopup.documentation = "Click on cancel button on window modal dialog. Set this flag to true to activate this feature";
		testCaseCancelPopup.commitCharacters = [Utils.NewLine];

		// Select
		const testCaseSelect = new vscode.CompletionItem("select");
		testCaseSelect.insertText = "select:" + Utils.NewLine;
		testCaseSelect.documentation = "Select a value on HTML select element";
		testCaseSelect.commitCharacters = [Utils.NewLine];

		// UploadFile
		const testCaseUploadFile = new vscode.CompletionItem("uploadFile");
		testCaseUploadFile.insertText = "uploadFile:" + Utils.NewLine;
		testCaseUploadFile.documentation = "Upload a file on HTML input upload element";
		testCaseUploadFile.commitCharacters = [Utils.NewLine];

		// SelectFrame
		const testCaseSelectFrame = new vscode.CompletionItem("selectFrame");
		testCaseSelectFrame.insertText = "selectFrame:" + Utils.NewLine;
		testCaseSelectFrame.documentation = "Select a frame / iframe to execute next actions on it";
		testCaseSelectFrame.commitCharacters = [Utils.NewLine];

		// SelectRootFrame
		const testCaseSelectRootFrame = new vscode.CompletionItem("selectRootFrame");
		testCaseSelectRootFrame.insertText = "selectRootFrame: true";
		testCaseSelectRootFrame.documentation = "Come back to root frame to execute next actions on it. Set this flag to true to activate this feature";
		testCaseSelectRootFrame.commitCharacters = [Utils.NewLine];

		// NextWindow
		const testCaseNextWindow = new vscode.CompletionItem("nextWindow");
		testCaseNextWindow.insertText = "nextWindow: true";
		testCaseNextWindow.documentation = "Go to another window. Usefull to navigate through a popup. Set this flag to true to activate this feature";
		testCaseNextWindow.commitCharacters = [Utils.NewLine];

		// HistoryAction
		const testCaseHistoryAction = new vscode.CompletionItem("historyAction");
		testCaseHistoryAction.insertText = new vscode.SnippetString("historyAction: ${1|back,refresh,forward|}");
		testCaseHistoryAction.documentation = "Simulate browser history navigation action (back, forward)";
		testCaseHistoryAction.commitCharacters = [Utils.NewLine];

		// Action
		if ( autoCompleteContext.isAutoCompletePossible &&
			 autoCompleteContext.currentParent == PARENT.ACTIONS &&
			 autoCompleteContext.currentTab ==  TAB.TESTSTEP_ACTION ) {
			
			// Click
			completionItems.push(testCaseClick);

			// Fill
			completionItems.push(testCaseFill);

			// Find
			completionItems.push(testCaseFind);

			// Navigate
			completionItems.push(testCaseNavigate);

			// Wait
			completionItems.push(testCaseWait);

			// ConfirmPopup
			completionItems.push(testCaseConfirmPopup);

			// CancelPopup
			completionItems.push(testCaseCancelPopup);

			// Select
			completionItems.push(testCaseSelect);

			// UploadFile
			completionItems.push(testCaseUploadFile);

			// SelectFrame
			completionItems.push(testCaseSelectFrame);

			// SelectRootFrame
			completionItems.push(testCaseSelectRootFrame);

			// NextWindow
			completionItems.push(testCaseNextWindow);

			// HistoryAction	
			completionItems.push(testCaseHistoryAction);		
		}

		if ( autoCompleteContext.isAutoCompletePossible ) {
			if ( autoCompleteContext.currentParent == PARENT.ACTION_CLICK && autoCompleteContext.currentTab ==  TAB.TESTSTEP_ACTION_CLICK ) {
				addClick(completionItems);
			}
			if ( autoCompleteContext.currentParent == PARENT.ACTION_FILL && autoCompleteContext.currentTab ==  TAB.TESTSTEP_ACTION_FILL ) {
				addFill(completionItems);
			}
			if ( autoCompleteContext.currentParent == PARENT.ACTION_NAVIGATE && autoCompleteContext.currentTab ==  TAB.TESTSTEP_ACTION_NAVIGATE ) {
				addNavigate(completionItems);
			}
			if ( autoCompleteContext.currentParent == PARENT.ACTION_SELECT && autoCompleteContext.currentTab ==  TAB.TESTSTEP_ACTION_SELECT ) {
				addSelect(completionItems);
			}
			if ( autoCompleteContext.currentParent == PARENT.ACTION_UPLOADFILE && autoCompleteContext.currentTab ==  TAB.TESTSTEP_ACTION_UPLOADFILE ) {
				addUploadFile(completionItems);
			}
			if ( autoCompleteContext.currentParent == PARENT.ACTION_SELECTFRAME && autoCompleteContext.currentTab ==  TAB.TESTSTEP_ACTION_SELECTFRAME ) {
				addSelectFrame(completionItems);
			}
		}

		return completionItems;
	}
});

function addClick(completionItems : vscode.CompletionItem[]) {

	// Find
	const actionFind = new vscode.CompletionItem("find");
	actionFind.insertText = "find: ";
	actionFind.documentation = "Identify a HTML element with CSS selector";
	actionFind.commitCharacters = [Utils.NewLine];
	completionItems.push(actionFind);

	// Wait
	const actionWait = new vscode.CompletionItem("wait");
	actionWait.insertText = "wait: ";
	actionWait.documentation = "Delay to wait (in second) before the next action";
	actionWait.commitCharacters = [Utils.NewLine];
	completionItems.push(actionWait);
}

function addFill(completionItems : vscode.CompletionItem[]) {
	
	// Find
	const actionFind = new vscode.CompletionItem("find");
	actionFind.insertText = "find: ";
	actionFind.documentation = "Identify a HTML element with CSS selector";
	actionFind.commitCharacters = [Utils.NewLine];
	completionItems.push(actionFind);

	// Text
	const actionText = new vscode.CompletionItem("text");
	actionText.insertText = "text: ";
	actionText.documentation = "Define the value to type on HTML input element";
	actionText.commitCharacters = [Utils.NewLine];
	completionItems.push(actionText);

	// Key
	const actionKey = new vscode.CompletionItem("key");
	actionKey.insertText = "key: ";
	actionKey.documentation = "Send a key code on HTML input element";
	actionKey.commitCharacters = [Utils.NewLine];
	completionItems.push(actionKey);
}

function addNavigate(completionItems : vscode.CompletionItem[]) {

	// Url
	const actionUrl = new vscode.CompletionItem("url");
	actionUrl.insertText = "url: ";
	actionUrl.documentation = "Navigate to an url";
	actionUrl.commitCharacters = [Utils.NewLine];
	completionItems.push(actionUrl);

	// Reset
	const actionReset = new vscode.CompletionItem("reset");
	actionReset.insertText = "reset: ";
	actionReset.documentation = "Flag to indicate to reset the page state. Destroy all cookies";
	actionReset.commitCharacters = [Utils.NewLine];
	completionItems.push(actionReset);
}

function addSelect(completionItems : vscode.CompletionItem[]) {

	// Find
	const actionFind = new vscode.CompletionItem("find");
	actionFind.insertText = "find: ";
	actionFind.documentation = "Identify a HTML element with CSS selector";
	actionFind.commitCharacters = [Utils.NewLine];
	completionItems.push(actionFind);

	// Text
	const actionText = new vscode.CompletionItem("text");
	actionText.insertText = "text: ";
	actionText.documentation = "Define the value to define on HTML select element";
	actionText.commitCharacters = [Utils.NewLine];
	completionItems.push(actionText);

	// Wait
	const actionWait = new vscode.CompletionItem("wait");
	actionWait.insertText = "wait: ";
	actionWait.documentation = "Delay to wait (in second) before the next action";
	actionWait.commitCharacters = [Utils.NewLine];
	completionItems.push(actionWait);
}

function addUploadFile(completionItems : vscode.CompletionItem[]) {

	// Find
	const actionFind = new vscode.CompletionItem("find");
	actionFind.insertText = "find: ";
	actionFind.documentation = "Identify a HTML element with CSS selector";
	actionFind.commitCharacters = [Utils.NewLine];
	completionItems.push(actionFind);

	// Files
	const actionText = new vscode.CompletionItem("files");
	actionText.insertText = "files: " + Utils.NewLine;
	actionText.documentation = "Define the files to upload. Provide the file path";
	actionText.commitCharacters = [Utils.NewLine];
	completionItems.push(actionText);

	// Wait
	const actionWait = new vscode.CompletionItem("wait");
	actionWait.insertText = "wait: ";
	actionWait.documentation = "Delay to wait (in second) before the next action";
	actionWait.commitCharacters = [Utils.NewLine];
	completionItems.push(actionWait);
}

function addSelectFrame(completionItems : vscode.CompletionItem[]) {

	// Find
	const actionFind = new vscode.CompletionItem("find");
	actionFind.insertText = "find: ";
	actionFind.documentation = "Identify a HTML element with CSS selector";
	actionFind.commitCharacters = [Utils.NewLine];
	completionItems.push(actionFind);
}