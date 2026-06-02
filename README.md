# TQL for VS Code ⚡

[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Install-blue?logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=tenzir.vscode-tql)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Write [Tenzir Query Language](https://docs.tenzir.com/explanations/language)
pipelines with syntax highlighting and editor basics in Visual Studio Code.

## ✨ Highlights

- 🎨 Syntax highlighting for TQL operators, expressions, literals, comments, and
  match statements.
- 📄 Automatic language detection for `.tql` files.
- 💬 Line and block comment support with `//` and `/* ... */`.
- 🧩 Bracket, quote, and surrounding-pair behavior for everyday editing.
- 📦 A bundled TextMate grammar that consumers can import directly from the
  package.

## 🚀 Installation

Install the extension from the
[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=tenzir.vscode-tql),
or search for **TQL** in **Extensions** inside VS Code.

To build and install a local `.vsix` package:

```sh
npm install
npx @vscode/vsce package
code --install-extension vscode-tql-<version>.vsix
```

VS Code activates the `tql` language mode automatically for `.tql` files.

## 📄 License

`vscode-tql` is licensed under the [MIT License](LICENSE).
