---
title: Security updates for development dependencies
type: bugfix
authors:
  - mavam
  - codex
prs:
  - 21
created: 2026-07-28T11:44:24.646911Z
---

The development toolchain now uses patched dependency releases to address its known npm security findings:

- `@vscode/vsce` 3.9.2
- `brace-expansion` 5.0.8
- `fast-uri` 3.1.4
- `form-data` 4.0.6
- `js-yaml` 4.3.0
- `linkify-it` 5.0.2
- `undici` 7.29.0

These upgrades prevent denial-of-service attacks, URL host confusion, multipart header injection, and TLS or request-routing bypasses during packaging and validation.
