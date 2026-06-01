# vscode-tql

This repository contains a small VS Code extension for Tenzir Query Language
syntax support.

- `changelog/` contains changelog entries and release notes. The content in this
  directory is managed by `tenzir-ship`.
- `package.json` defines the extension metadata, marketplace publisher, VS Code
  engine requirement, contributed language ID, file extensions, and grammar path.
- `index.js` exports the TextMate grammar JSON for consumers that import the
  package directly.
- `syntaxes/tql.tmLanguage.json` contains the TQL TextMate grammar. Most language
  highlighting changes belong here.
- `language-configuration.json` configures editor behavior such as comments,
  brackets, and auto-closing pairs for `.tql` files.
- `logo.png`, `README.md`, and `.vscodeignore` affect packaging and marketplace
  presentation.

## Build, Test, and Development Commands

Use the tools directly from the repository root:

- `npx prettier --check .` checks formatting.
- `npx prettier --write .` formats JSON, JavaScript, and Markdown files.
- `npx @vscode/vsce package` builds a local `.vsix` package for inspection.
- `code --install-extension vscode-tql-<version>.vsix` installs a packaged build
  for local testing.

## Coding Style & Naming Conventions

Use Prettier formatting. Existing JSON uses tabs, and `index.js` uses modern ES
module syntax. Keep grammar scope names consistent with TextMate conventions, for
example `keyword.operator.tql`, `string.quoted.double.tql`, or
`comment.line.double-slash.tql`. Prefer focused grammar patterns over broad
regular expressions that accidentally color unrelated syntax.

## Testing Guidelines

This project has no automated test suite yet. Validate changes manually in VS
Code with representative `.tql` snippets that cover the edited grammar paths.
Before publishing, package the extension with `npx @vscode/vsce package`,
install the generated `.vsix`, and verify that `.tql` files activate the `tql`
language mode and expected highlighting.

## Release Process

Do not put maintainer-only release process changes into the user-facing
changelog. Reserve changelog entries for changes visible to extension users.

To cut a release, add user-facing changelog entries with `tenzir-ship add`, then
run the **Release** workflow in GitHub Actions. The workflow delegates to the
reusable `tenzir/ship/.github/workflows/release.yaml@main` workflow to create
release notes, update the configured `package.json` version file, commit the
release, tag it, and publish the GitHub release.

The workflow requires a short `intro` for the release notes. Leave `bump` set to
`auto` to infer the next version from unreleased changelog entries, or provide an
explicit `version` such as `v1.2.3`.

Stable latest releases also publish the extension to the Visual Studio
Marketplace using the `VSCE_PAT` repository secret. New marketplace publishers
need access through the Tenzir publisher account; the token requires the
Marketplace Manage scope.
