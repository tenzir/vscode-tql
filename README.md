# TQL - VS Code Extension

[![VS Code Marketplace](https://img.shields.io/badge/VSCode-Install-blue?logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=tenzir.vscode-tql)

A Visual Studio Code extension for working with the [Tenzir Query Language (TQL)](https://docs.tenzir.com).

This extension provides syntax highlighting and language support for TQL.

## Installation

### **From the VS Code Marketplace (Recommended)**

1. Open **Visual Studio Code**
2. Go to **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **"TQL"**
4. Click **Install**

### **Manual Installation (VSIX Package)**

If you have a `.vsix` file:

```sh
code --install-extension vscode-tql-<version>.vsix
```

## Usage

1. Open a `.tql` file in VS Code.
2. The syntax highlighting will be applied automatically.
3. More language features coming soon!

## Extension Settings

This extension does not add new settings (yet).

Future updates may introduce customization options.

## Contributing

Contributions are welcome! 🎉
If you'd like to improve this extension, please:

- Open an issue on [GitHub](https://github.com/tenzir/vscode-tql/issues)
- Submit a pull request

### Releasing

To cut a new release, run the following two commands from the repo root:

```sh
vsce package
vsce publish
```

You must have run `vsce login tenzir` once in the past, which requires a valid
[Azure DevOps Personal Access Token
(PAT)](https://dev.azure.com/tenzir/_usersSettings/tokens). This token only
requires the *Marketplace Manage* scope. New users must also be [added as
contributors](https://marketplace.visualstudio.com/manage/publishers/).

Example output:

```txt
❯ vsce package
 INFO  Files included in the VSIX:
vscode-tql-1.0.2.vsix
├─ [Content_Types].xml
├─ extension.vsixmanifest
└─ extension/
   ├─ LICENSE.txt [1.04 KB]
   ├─ changelog.md [0.22 KB]
   ├─ language-configuration.json [0.76 KB]
   ├─ logo.png [8.27 KB]
   ├─ package.json [0.76 KB]
   ├─ readme.md [1.26 KB]
   └─ syntaxes/
      └─ tql.tmLanguage.json [5.93 KB]

 DONE  Packaged: /Users/mavam/code/tenzir/vscode-tql/vscode-tql-1.0.2.vsix (9 files, 11.12 KB)
❯ vsce publish
 INFO  Files included in the VSIX:
vscode-tql-1.0.2.vsix
├─ [Content_Types].xml
├─ extension.vsixmanifest
└─ extension/
   ├─ LICENSE.txt [1.04 KB]
   ├─ changelog.md [0.22 KB]
   ├─ language-configuration.json [0.76 KB]
   ├─ logo.png [8.27 KB]
   ├─ package.json [0.76 KB]
   ├─ readme.md [1.26 KB]
   └─ syntaxes/
      └─ tql.tmLanguage.json [5.93 KB]

 INFO  Publishing 'tenzir.vscode-tql v1.0.2'...
 INFO  Extension URL (might take a few minutes): https://marketplace.visualstudio.com/items?itemName=tenzir.vscode-tql
 INFO  Hub URL: https://marketplace.visualstudio.com/manage/publishers/tenzir/extensions/vscode-tql/hub
 DONE  Published tenzir.vscode-tql v1.0.2.
 WARNING  The latest version of @vscode/vsce is 3.3.2 and you have 3.2.1.
Update it now: npm install -g @vscode/vsce
```

The new package should show up after a few minutes in the version history
of the [VisualStudio Marketplace page][vscode-marketplace].

[vscode-marketplace]: https://marketplace.visualstudio.com/items?itemName=tenzir.vscode-tql&ssr=false#version-history

## License

This extension is licensed under the **MIT License**.
See [LICENSE](./LICENSE.txt) for details.
