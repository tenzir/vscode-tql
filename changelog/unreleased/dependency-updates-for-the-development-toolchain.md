---
title: Dependency updates for the development toolchain
type: bugfix
authors:
  - mavam
  - claude
prs:
  - 22
created: 2026-08-06T07:36:37.321533Z
---

The extension's development toolchain now runs on current dependency releases, closing a high-severity host-confusion vulnerability in `fast-uri` that affected URL parsing during packaging and validation.

Direct dependencies:

- `lefthook`: 2.1.9 → 2.1.10
- `prettier`: 3.8.3 → 3.9.6

Notable transitive dependencies:

- `brace-expansion`: 5.0.8 → 5.0.9
- `fast-uri`: 3.1.4 → 3.1.5
- `js-yaml`: 4.3.0 → 4.3.1
- `markdown-it`: 14.2.0 → 14.3.0
- `qs`: 6.15.2 → 6.15.3
- `semver`: 7.8.1 → 7.8.5
- `tar-fs`: 2.1.4 → 2.1.5

`npm audit` now reports no known vulnerabilities.
