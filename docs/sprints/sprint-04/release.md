---
gse:
  type: release
  sprint: 4
  branch: gse/sprint-04/integration
  traces:
    implements: [TASK-010]
  status: approved
  version: "0.4.0"
  tag: "v0.4.0"
  commit: "86f210e"
  created: "2026-11-26"
  updated: "2026-11-26"
---

# Release Notes — 0.4.0

## Overview

TODOTODAY 0.4.0 adds a safety net to importing a backup: the app now asks you to
confirm before an import replaces your list. A small, focused release — the app
stays a single browser page with no server and no dependencies.

## What's New

### Features

- **Confirm before import** — after you pick a valid backup file, you're asked "This will replace your current list. Continue?" with OK / Cancel (TASK-010, REQ-014)

### Improvements

- **Safer order of checks** — the file is validated before the confirmation appears, so a corrupt file gives a clear "could not read that file" message instead of a replace prompt

### Bug Fixes

- _None._

## Breaking Changes

| Change | Migration Steps |
|--------|-----------------|
| _None._ | |

## Quality Summary

| Metric               | Value |
|----------------------|-------|
| Test coverage        | not measured (Lightweight mode) |
| Tests passed         | 17 / 17 (100%) — TCP-004 (regression suite) |
| Review findings open | 0 |
| Health score         | see `docs/dashboard.html` |
| Security findings    | 0 |

## Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| _None known._ | — | — |

## Dependencies

| Dependency | Version | Change |
|------------|---------|--------|
| _none_     | —       | the app has no runtime dependencies |

## Installation / Upgrade

```text
Open index.html in your browser. Done.
```

## Contributors

- Built by GSE-One with TODOTODAY (pair: AI agent + user)

## Sprint History

| Sprint | Goal | Items Completed |
|--------|------|-----------------|
| 1 | A minimal shared to-do list for two people | 4 |
| 2 | Rebuild as a personal, browser-only list | 1 |
| 3 | Add backup/export and a save confirmation | 2 |
| 4 | Confirm before import replaces the list | 1 |

## Notes

_Fourth cycle. Smallest sprint so far (1 point) — a focused safety fix from the
sprint-3 wrap-up._
