This release refreshes the extension's development toolchain with current dependency releases, including a patched `fast-uri` that resolves its known host-confusion advisory.

## 🐞 Bug fixes

### Dependency updates for the development toolchain

Routine dependency update for the development toolchain, including a patched `fast-uri` that resolves its known host-confusion advisory:

- `brace-expansion`: 5.0.8 → 5.0.9
- `fast-uri`: 3.1.4 → 3.1.5
- `js-yaml`: 4.3.0 → 4.3.1
- `lefthook`: 2.1.9 → 2.1.10
- `markdown-it`: 14.2.0 → 14.3.0
- `prettier`: 3.8.3 → 3.9.6
- `qs`: 6.15.2 → 6.15.3
- `semver`: 7.8.1 → 7.8.5
- `tar-fs`: 2.1.4 → 2.1.5

Importing the grammar module also works again on Node 22 and later, which no longer accepts the module's previous `assert { type: "json" }` import syntax.

*By @mavam and @claude in #22.*
