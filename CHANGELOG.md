# Change Log

All notable changes to the "tql" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [2.0.0] - 2025-10-23

### Changed

- **BREAKING**: Switched from TextMate grammar to tree-sitter-tql backend
- Improved syntax highlighting accuracy using full parser
- Unified highlighting with Neovim and Zed extensions

### Added

- Semantic tokens provider using tree-sitter
- Context-aware syntax highlighting
- Support for all TQL constructs via tree-sitter-tql
- TypeScript-based extension runtime

### Fixed

- Various highlighting inconsistencies from regex-based approach

## [1.0.3] - Previous releases

- TextMate grammar-based syntax highlighting
