import * as vscode from 'vscode';
import { AutoCompleteContext, NAME, PARENT, TAB } from './autoCompleteContext';
import { Utils } from './utils';

export const contextProvider = vscode.languages.registerCompletionItemProvider('yaml', {
	
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
		const completionItems : vscode.CompletionItem[] = [];

		// AutoComplete context
		const autoCompleteContext = new AutoCompleteContext();
		autoCompleteContext.init(document, position);

		// Name (default, web, redis)
		const regexName = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}name\\s*:.*");
		const contextName = new vscode.CompletionItem("name");
		contextName.insertText = new vscode.SnippetString("name: ${1|default,web,redis|}");
		contextName.documentation = "Test case name";
		contextName.commitCharacters = [Utils.NewLine];

		// DialURL
		const regexDialURL = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}dialUrl\\s*:.*");
		const contextDialURL = new vscode.CompletionItem("dialUrl");
		contextDialURL.insertText = "dialUrl: \"redis://user:secret@localhost:6379/0\"";
		contextDialURL.documentation = "URL to connect to redis";
		contextDialURL.commitCharacters = [Utils.NewLine];

		// Width
		const regexWidth = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}width\\s*:.*");
		const contextWidth = new vscode.CompletionItem("width");
		contextWidth.insertText = "width: 1024";
		contextWidth.documentation = "Web context width";
		contextWidth.commitCharacters = [Utils.NewLine];

		// Height
		const regexHeight = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}height\\s*:.*");
		const contextHeight = new vscode.CompletionItem("height");
		contextHeight.insertText = "height: 768";
		contextHeight.documentation = "Web context height";
		contextHeight.commitCharacters = [Utils.NewLine];

		// Driver
		const regexDriver = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}driver\\s*:.*");
		const contextDriver = new vscode.CompletionItem("driver");
		contextDriver.insertText = new vscode.SnippetString("driver: ${1|chrome,gecko,phantomJS|}");
		contextDriver.documentation = "Web context driver";
		contextDriver.commitCharacters = [Utils.NewLine];

		// Args
		const regexArgs = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}args\\s*:.*");
		const contextArgs = new vscode.CompletionItem("args");
		contextArgs.insertText = "args:\r\n- ";
		contextArgs.documentation = "Web context args";
		contextArgs.commitCharacters = [Utils.NewLine];

		// Prefs
		const regexPrefs = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}prefs\\s*:.*");
		const contextPrefs = new vscode.CompletionItem("prefs");
		contextPrefs.insertText = "prefs:\r\n" + autoCompleteContext.tab;
		contextPrefs.documentation = "Web context prefs";
		contextPrefs.commitCharacters = [Utils.NewLine];

		// Timeout
		const regexTimeout = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}timeout\\s*:.*");
		const contextTimeout = new vscode.CompletionItem("timeout");
		contextTimeout.insertText = "timeout: 100\r\n";
		contextTimeout.documentation = "Web context timeout";
		contextTimeout.commitCharacters = [Utils.NewLine];

		// Debug
		const regexDebug = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}debug\\s*:.*");
		const contextDebug = new vscode.CompletionItem("debug");
		contextDebug.insertText = "debug: true\r\n";
		contextDebug.documentation = "Context debug";
		contextDebug.commitCharacters = [Utils.NewLine];

		// Detect context
		if ( autoCompleteContext.isAutoCompletePossible &&
			autoCompleteContext.currentParent == PARENT.CONTEXT &&
			autoCompleteContext.currentTab == TAB.TESTCONTEXT ) {

			// Name
			if ( document.getText().match(regexName) == null ) {
				completionItems.push(contextName);
			}

			// Redis
			if ( autoCompleteContext.name == NAME.REDIS ) {
				if ( document.getText().match(regexDialURL) == null ) {
					completionItems.push(contextDialURL);
				}

			// Web
			} else if ( autoCompleteContext.name == NAME.WEB ) {

				// Width
				if ( document.getText().match(regexWidth) == null ) {
					completionItems.push(contextWidth);
				}

				// Height
				if ( document.getText().match(regexHeight) == null ) {
					completionItems.push(contextHeight);
				}

				// Driver
				if ( document.getText().match(regexDriver) == null ) {
					completionItems.push(contextDriver);
				}

				// Args
				if ( document.getText().match(regexArgs) == null ) {
					completionItems.push(contextArgs);
				}

				// Prefs
				if ( document.getText().match(regexPrefs) == null ) {
					completionItems.push(contextPrefs);
				}

				// Timeout
				if ( document.getText().match(regexTimeout) == null ) {
					completionItems.push(contextTimeout);
				}

				// Debug
				if ( document.getText().match(regexDebug) == null ) {
					completionItems.push(contextDebug);
				}
			}
		}

		return completionItems;
	}
});