import * as vscode from 'vscode';

export module PARENT {
	export const NO_PARENT = "";
	export const TESTCASES = "testcases";
	export const STEPS = "steps";
	export const CONTEXT = "context";
}

export module NAME {
	export const DEFAULT = "default";
	export const REDIS = "redis";
	export const WEB = "web";
}

export class AutoCompleteContext {
	
	private _tab : string = "  ";
	private _currentTab : number = 0;
	private _currentParent : string = "";
	private _isAutoCompletePossible : boolean = false;
	private _documentText : string = "";

	private _name : string = "";
	private _type : string = "";
	

	public init(document: vscode.TextDocument, position: vscode.Position) {

		// Get previous content
		this._documentText = document.getText().substr(0, document.offsetAt(position));
		this._documentText = this._documentText.replace(/\r/g, "").replace(/\t/g, " ");

		// Get current line
		this.getCurrentLine(this._documentText);
		
		// Detect
		this.computeLastParent(this._documentText);
		this.detectName(this._documentText);
		this.detectType(this._documentText);
	}

	private getCurrentLine(documentText: string) {
		const lines = documentText.split('\n');
		if ( lines.length > 0 ) {

			// Identify if auto complete is possible or not
			const currentLine: string = lines[lines.length - 1];
			if ( currentLine.match(/\s*[a-z|A-Z|0-9|_]*\s*:/g) == null) {
				this._isAutoCompletePossible = true;
			}

			// Identify the current tab
			this._currentTab = this.computeLineTabulation(currentLine);
		}
	}

	private computeLineTabulation(currentLine: string) {
		var i = 0;
		for ( i = 0; i < currentLine.length; i++) {
			if (currentLine[i] != ' ' && currentLine[i] != '-') {
				break;
			}
		}
		return i / this._tab.length;
	}

	private computeLastParent(documentText: string) {
		this._currentParent = "";
		if ( this._currentTab > 0 ) {
			const lines = documentText.split('\n');
			var i, tab = 999;
			for ( i = lines.length - 1; i >= 0; i--) {
				tab = this.computeLineTabulation(lines[i]);
				if ( tab < this.currentTab) { break; }
			}
			if ( tab < this.currentTab && i >= 0) {
				const regex = /\s*\-?\s*(?<key>[a-z|A-Z|0-9|_]*)\s*/g;
				const match = regex.exec(lines[i]);
				if ( match && match.groups ) {
					this._currentParent = match.groups["key"];
				}
			}
		} 
	}

	private detectName(content: string) {
		content.split('\n').forEach((line) => {
			const nameRegex = /\s*name\s*:\s*(?<name>[a-z|A-Z]*)\s*/g;
			var match = nameRegex.exec(line);
			if ( match != null && match.groups ) {
				this._name = match.groups["name"];
			}
		});
	}

	private detectType(content: string) {
		content.split('\n').forEach((line) => {
			const testTypeRegex = /\s*\-?\s*type\s*:\s*(?<type>[a-z|A-Z]*)\s*/g;
			var match = testTypeRegex.exec(line);
			if ( match != null && match.groups ) {
				this._type = match.groups["type"];
			}
		});
	}


	public get tab() {
		return this._tab;
	}
	public get currentTab() {
		return this._currentTab;
	}
	public get currentParent() {
		return this._currentParent;
	}
	public get isAutoCompletePossible () {
		return this._isAutoCompletePossible;
	}
	public get documentText() {
		return this._documentText;
	}

	public get name() {
		return this._name;
	}
	public get type() {
		return this._type;
	}
}