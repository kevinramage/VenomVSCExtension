import * as vscode from 'vscode';
import { contextProvider } from './contextProvider';
import { testCaseProvider } from './testCaseProvider';
import { testStepProvider } from './testStepProvider';
import { testSuiteProvider } from './testSuiteProvider';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(testSuiteProvider);
	context.subscriptions.push(testCaseProvider);
	context.subscriptions.push(contextProvider);
	context.subscriptions.push(testStepProvider);
}