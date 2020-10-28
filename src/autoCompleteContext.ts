import * as vscode from 'vscode';
import { Utils } from './utils';

export module PARENT {
	export const NO_PARENT = "";
	export const TESTCASES = "testcases";
	export const STEPS = "steps";
	export const CONTEXT = "context";
	export const ACTIONS = "actions";
	export const ACTION_CLICK = "click";
	export const ACTION_FILL = "fill";
	export const ACTION_NAVIGATE = "navigate";
	export const ACTION_SELECT = "select";
	export const ACTION_UPLOADFILE = "uploadFile";
	export const ACTION_SELECTFRAME = "selectFrame";
}

export module NAME {
	export const DEFAULT = "default";
	export const REDIS = "redis";
	export const WEB = "web";
}

export module TAB {
	export const TESTSUITE = 0;
	export const TESTCASE = 1;
	export const TESTSTEP = 2;
	export const TESTSTEP_ACTION = 3;
	export const TESTSTEP_ACTION_CLICK = 4;
	export const TESTSTEP_ACTION_FILL = 4;
	export const TESTSTEP_ACTION_NAVIGATE = 4;
	export const TESTSTEP_ACTION_SELECT = 4;
	export const TESTSTEP_ACTION_UPLOADFILE = 4;
	export const TESTSTEP_ACTION_SELECTFRAME = 4;
	export const TESTCONTEXT = 2;
	export const TESTCONTEXT_ARGS = 3;
	export const TESTCONTEXT_PREFS = 3;
}

export class AutoCompleteContext {
	
	private _tab : string = "  ";
	private _currentTab : number = 0;
	private _currentParent : string = "";
	private _isAutoCompletePossible : boolean = false;
	private _documentText : string = "";
	private _localText : string = "";

	private _name : string = "";
	private _type : string = "";
	

	public init(document: vscode.TextDocument, position: vscode.Position) {

		// Get previous content
		this._documentText = document.getText().substr(0, document.offsetAt(position));
		this._documentText = this._documentText.replace(/\r/g, "").replace(/\t/g, " ");

		// Get next content
		const contentAfter = document.getText().substr(document.offsetAt(position) - position.character);

		// Get current line
		this.getCurrentLine(this._documentText);
		
		// Detect
		this.computeLocalText(this._documentText, contentAfter);
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
				if ( lines[i].replace(/\r/g, "").trim().length > 0 ) {
					tab = this.computeLineTabulation(lines[i]);
					if ( tab < this.currentTab) { break; }
				}
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

	private computeLocalText(contentBefore: string, contentAfter: string) {
		var result : Array<string> = [];

		// Lines before
		if ( contentBefore && contentBefore.length > 0 ) {
			const lines = contentBefore.split('\n');
			const currentTab = this.computeLineTabulation(lines[lines.length - 1]);

			for ( var i = lines.length - 1; i >= 0; i-- ) {
				const tab = this.computeLineTabulation(lines[i]);
				if ( tab == currentTab ) {
					result.push(lines[i]);
				} else {
					break;
				}
			}
			result = result.reverse();
		}

		// Lines after
		if ( contentAfter && contentAfter.length > 0 ) {
			const lines = contentAfter.split('\n');
			const currentTab = this.computeLineTabulation(lines[0]);
			for ( var i = 1; i < lines.length; i++ ) {
				const tab = this.computeLineTabulation(lines[i]);
				if ( tab == currentTab ) {
					result.push(lines[i]);
				} else {
					break;
				}
			}
		}

		this._localText = result.join(Utils.NewLine);
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
	public get localText() {
		return this._localText;
	}

	public get name() {
		return this._name;
	}
	public get type() {
		return this._type;
	}
}