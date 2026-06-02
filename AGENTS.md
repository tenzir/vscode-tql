# vscode-tql

Small VS Code extension for Tenzir Query Language syntax support.

## Key files

- `syntaxes/tql.tmLanguage.json`: TextMate grammar; most highlighting changes.
- `language-configuration.json`: comments, brackets, and auto-closing pairs.
- `package.json`: extension metadata, language contribution, and grammar path.
- `README.md`, `logo.png`, `.vscodeignore`: marketplace presentation.
- `changelog/`: changelog entries and release notes managed by `tenzir-ship`.

## Development

After installing dependencies, install the checked-in Git hooks with:

```sh
npm run lefthook:install
```

Git runs Lefthook's `pre-push` hook automatically after that. To reproduce the
same harness manually across the repository, run `npm run lint`. To auto-fix
formatting issues, run `npm run lint:fix` or `npx lefthook run fix --file
<path>` for targeted files.

## Manual validation

- `npx @vscode/vsce package`
- `code --install-extension vscode-tql-<version>.vsix`

There is no automated test suite.

After packaging and installing the `.vsix`, inspect `.tql` files in VS Code.

## Release engineering

Add changelog entries for user-visible changes via `tenzir-ship`.

Release from `main` by running `.github/workflows/release.yaml`.
