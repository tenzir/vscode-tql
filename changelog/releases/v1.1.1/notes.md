This release updates the extension development toolchain to patched dependency releases, resolving denial-of-service, host-confusion, header-injection, and request-routing vulnerabilities.

## 🐞 Bug fixes

### Security updates for development dependencies

The development toolchain now uses patched dependency releases to address its known npm security findings:

- `@vscode/vsce` 3.9.2
- `brace-expansion` 5.0.8
- `fast-uri` 3.1.4
- `form-data` 4.0.6
- `js-yaml` 4.3.0
- `linkify-it` 5.0.2
- `undici` 7.29.0

These upgrades prevent denial-of-service attacks, URL host confusion, multipart header injection, and TLS or request-routing bypasses during packaging and validation.

*By @mavam and @codex in #21.*
