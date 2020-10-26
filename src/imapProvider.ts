import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const imapProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// imaphost
	const regexImaphost = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}imaphost\\s*:.*");
	const imaphost = new vscode.CompletionItem("imaphost");
	imaphost.insertText = "imaphost: ";
	imaphost.documentation = "imaphost (Mandatory)";
	imaphost.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexImaphost) ) {
		completionItems.push(imaphost);
	}

	// imapport
	const regexImapport = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}imapport\\s*:.*");
	const imapport = new vscode.CompletionItem("imapport");
	imapport.insertText = "imapport: 993";
	imapport.documentation = "imapport (Optional)";
	imapport.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexImapport) ) {
		completionItems.push(imapport);
	}

	// imapuser
	const regexImapuser = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}imapuser\\s*:.*");
	const imapuser = new vscode.CompletionItem("imapuser");
	imapuser.insertText = "imapuser: ";
	imapuser.documentation = "imapuser (Mandatory)";
	imapuser.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexImapuser) ) {
		completionItems.push(imapuser);
	}

	// imappassword
	const regexImappassword = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}imappassword\\s*:.*");
	const imappassword = new vscode.CompletionItem("imappassword");
	imappassword.insertText = "imappassword: ";
	imappassword.documentation = "imappassword (Mandatory)";
	imappassword.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexImappassword) ) {
		completionItems.push(imappassword);
	}

	// searchfrom
	const regexSearchfrom = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}searchfrom\\s*:.*");
	const searchfrom = new vscode.CompletionItem("searchfrom");
	searchfrom.insertText = "searchfrom: ";
	searchfrom.documentation = "searchfrom (Optional)";
	searchfrom.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexSearchfrom) ) {
		completionItems.push(searchfrom);
	}

	// searchto
	const regexSearchto = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}searchto\\s*:.*");
	const searchto = new vscode.CompletionItem("searchto");
	searchto.insertText = "searchto: ";
	searchto.documentation = "searchto (Optional)";
	searchto.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexSearchto) ) {
		completionItems.push(searchto);
	}

	// searchsubject
	const regexSearchsubject = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}searchsubject\\s*:.*");
	const searchsubject = new vscode.CompletionItem("searchsubject");
	searchsubject.insertText = "searchsubject: ";
	searchsubject.documentation = "searchsubject (Optional)";
	searchsubject.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexSearchsubject) ) {
		completionItems.push(searchsubject);
	}

	// searchbody
	const regexSearchbody = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}searchbody\\s*:.*");
	const searchbody = new vscode.CompletionItem("searchbody");
	searchbody.insertText = "searchbody: ";
	searchbody.documentation = "searchbody (Optional)";
	searchbody.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexSearchbody) ) {
		completionItems.push(searchbody);
	}

	// mbox
	const regexMbox = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}mbox\\s*:.*");
	const mbox = new vscode.CompletionItem("mbox");
	mbox.insertText = "mbox: ";
	mbox.documentation = "mbox (Optional)";
	mbox.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexMbox) ) {
		completionItems.push(mbox);
	}

	// mboxonsuccess
	const regexMboxonsuccess = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}mboxonsuccess\\s*:.*");
	const mboxonsuccess = new vscode.CompletionItem("mboxonsuccess");
	mboxonsuccess.insertText = "mboxonsuccess: ";
	mboxonsuccess.documentation = "mboxonsuccess (Optional)";
	mboxonsuccess.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localText.match(regexMboxonsuccess) ) {
		completionItems.push(mboxonsuccess);
	}
}