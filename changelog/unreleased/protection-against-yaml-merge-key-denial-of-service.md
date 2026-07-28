---
title: Protection against YAML merge-key denial of service
type: bugfix
authors:
  - mavam
  - codex
prs:
  - 21
created: 2026-07-28T11:39:16.495444Z
---

The development toolchain now uses `js-yaml` 4.3.0 to prevent crafted YAML merge-key chains from causing quadratic CPU consumption. This security update addresses [GHSA-52cp-r559-cp3m](https://github.com/advisories/GHSA-52cp-r559-cp3m).
