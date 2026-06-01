# VS Code TQL v1.0.3

This release improves TQL grammar coverage for raw strings, nested pipelines, and the `move` keyword.

## 🚀 Features

### Move keyword highlighting

The `move` keyword now highlights as an operator when used in operator position and as a keyword when used in expressions.

_By @jachris in #15._

## 🐞 Bug Fixes

### Raw string and pipeline highlighting

Raw strings and nested pipelines now highlight correctly, and `pipeline` is no longer highlighted as a TQL keyword.

_By @jachris in #13._
