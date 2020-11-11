import * as vscode from 'vscode';
import { AutoCompleteContext } from './autoCompleteContext';
import { Utils } from './utils';

export const dbFixturesProvider = function (completionItems : vscode.CompletionItem[], autoCompleteContext : AutoCompleteContext) {

	// Database
	const regexDatabase = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}database\\s*:.*");
	const database = new vscode.CompletionItem("database");
	database.kind = vscode.CompletionItemKind.Enum;
	database.insertText = new vscode.SnippetString("database: ${1|mysql,postgres|}");
	database.documentation = "Database (Mandatory)";
	database.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexDatabase) ) {
		completionItems.push(database);
	}

	// DSN
	const regexDSN = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}dsn\\s*:.*");
	const dsn = new vscode.CompletionItem("dsn");
	dsn.insertText = "dsn: ";
	dsn.documentation = "DSN (Mandatory)";
	dsn.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexDSN) ) {
		completionItems.push(dsn);
	}

	// Schemas
	const regexSchemas = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}schemas\\s*:.*");
	const schemas = new vscode.CompletionItem("schemas");
	schemas.insertText = "schemas: ";
	schemas.documentation = "Schemas (Optional)";
	schemas.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexSchemas) ) {
		completionItems.push(schemas);
	}

	// Migrations
	const regexMigrations = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}migrations\\s*:.*");
	const migrations = new vscode.CompletionItem("migrations");
	migrations.insertText = "migrations: ";
	migrations.documentation = "Migrations (Optional)";
	migrations.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexMigrations) ) {
		completionItems.push(migrations);
	}

	// MigrationsTable
	const regexMigrationsTable = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}migrationsTable\\s*:.*");
	const migrationsTable = new vscode.CompletionItem("migrationsTable");
	migrationsTable.insertText = "migrationsTable: ";
	migrationsTable.documentation = "Migrations Table (Optional)";
	migrationsTable.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexMigrationsTable) ) {
		completionItems.push(migrationsTable);
	}

	// SkipResetSequences
	const regexSkipResetSequences = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}skipResetSequences\\s*:.*");
	const skipResetSequences = new vscode.CompletionItem("skipResetSequences");
	skipResetSequences.insertText = "skipResetSequences: ";
	skipResetSequences.documentation = "Skip reset sequences (Optional)";
	skipResetSequences.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexSkipResetSequences) ) {
		completionItems.push(skipResetSequences);
	}

	// Files
	const regexFiles = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}files\\s*:.*");
	const files = new vscode.CompletionItem("files");
	files.insertText = "files: ";
	files.documentation = "Files (Optional)";
	files.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexFiles) ) {
		completionItems.push(files);
	}

	// Folder
	const regexFolder = new RegExp("[\\s|\\-]{" + autoCompleteContext.tab.length*2 + "}folder\\s*:.*");
	const folder = new vscode.CompletionItem("folder");
	folder.insertText = "folder: ";
	folder.documentation = "Folder (Optional)";
	folder.commitCharacters = [ Utils.NewLine ];
	if ( !autoCompleteContext.localContext.match(regexFolder) ) {
		completionItems.push(folder);
	}
}