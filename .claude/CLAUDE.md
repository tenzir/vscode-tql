# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VS Code extension for syntax highlighting and language support for the Tenzir Query Language (TQL). The extension is published to the VS Code Marketplace as "TQL" (tenzir.vscode-tql).

## Core Architecture

The extension is a pure TextMate grammar-based VS Code extension with no compiled TypeScript/JavaScript code. It consists of:

- **TextMate Grammar** (`syntaxes/tql.tmLanguage.json`): Defines syntax highlighting rules for TQL
  - Uses a repository pattern with `#root`, `#keywords`, `#expression_keywords`, and `#common` patterns
  - Handles multiple modes: operator mode, expression mode, and nested pipelines in braces
  - Supports TQL-specific literals: timestamps, IPv4/IPv6 addresses, raw strings (r" and r#")
  - Distinguishes between keywords (\_, is, as, use, return, def, function, let, and, or, in, not, this, meta, super, for, if, while, match, else) and expression keywords (move)
  - Recognizes operators, function calls, variables, constants, and record syntax

- **Language Configuration** (`language-configuration.json`): Defines editor behaviors
  - Comment styles (// for line, /\*\*/ for block)
  - Bracket matching and auto-closing pairs
  - No custom indentation rules

- **Package Manifest** (`package.json`): VS Code extension configuration
  - Registers `.tql` file extension
  - Links to grammar and language configuration files
  - No activation events or runtime code

- **Export Module** (`index.js`): Simple ES module that exports the grammar JSON for use in other packages/tools

## Development Commands

**Test the extension locally:**
Press F5 in VS Code or use the "Extension" launch configuration in `.vscode/launch.json` to open a new Extension Development Host window

**Package the extension:**

```sh
vsce package
```

**Publish to marketplace:**

```sh
vsce publish
```

Note: Requires `vsce login tenzir` with a valid Azure DevOps PAT (Marketplace Manage scope)

**Format code:**

```sh
prettier --write .
```

(Used for formatting JSON files)

## Important Constraints

- The extension has no build step, tests, or runtime dependencies beyond VS Code itself
- Version updates require manual version bumps in `package.json`

## Grammar Development Notes

When modifying `syntaxes/tql.tmLanguage.json`:

- TQL has context-sensitive parsing: `foo bar` can be an operator call or expression depending on context
- The grammar uses lookahead patterns to distinguish operator mode (`entity.name.function`) from other contexts
- Nested braces can contain either records (with `key: value` syntax) or pipelines
- The pipe operator `|` returns to root parsing context for chaining operators
- Raw strings support both `r"..."` and `r#"..."#` syntax
