---
gse:
  type: release
  sprint: 3
  branch: gse/sprint-03/integration
  traces:
    implements: [TASK-008, TASK-009]
  status: approved
  version: "0.3.0"
  tag: "v0.3.0"
  commit: "2eb119f"
  created: "2026-11-26"
  updated: "2026-11-26"
---

# Release Notes — 0.3.0

## Overview

TODOTODAY 0.3.0 lets you **back up your list**. You can export your tasks to a
file and import them back — useful to protect against losing the list and to move
it between devices. It also adds a small confirmation when an edit is saved. The
app remains a single browser page with no server and no dependencies.

## What's New

### Features

- **Export backup** — save your list to a file (`todotoday-backup.json`) (TASK-008, REQ-011)
- **Import backup** — load a file back; it replaces your current list (TASK-008, REQ-012)
- **Save confirmation** — a brief "Saved" hint after editing a task (TASK-009, REQ-013)

### Improvements

- **Safer import** — an unreadable file is rejected and your list is left untouched

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
| Tests passed         | 17 / 17 (100%) — TCP-003 |
| Review findings open | 0 |
| Health score         | see `docs/dashboard.html` |
| Security findings    | 0 — no server, no network; import is validated |

## Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| Import replaces the whole list (by design) | low | export first if you want to keep the current list |

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

## Notes

_Third cycle. The app now has a way to protect its data — addressing the
"browser-only storage can be lost" risk flagged in sprint 2._
