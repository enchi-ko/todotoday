---
gse:
  type: release
  sprint: 2
  branch: gse/sprint-02/integration
  traces:
    implements: [TASK-007]
  status: approved
  version: "0.2.0"
  tag: "v0.2.0"
  commit: "3ca3d43"
  created: "2026-11-26"
  updated: "2026-11-26"
---

# Release Notes — 0.2.0

## Overview

TODOTODAY 0.2.0 turns the app into a **personal to-do list that runs entirely in
your browser**. Following the scope change recorded in DEC-002, the two-person
sharing and the server were removed: there is now a single page you open, and
your tasks are saved in the browser. No server, no install, no accounts, no cost.

## What's New

### Features

- **Personal list** — add, view, mark done, edit and delete tasks (TASK-007, REQ-006…REQ-009)
- **Saved in the browser** — your list and its done-state persist between visits (REQ-010)

### Improvements

- **No server, no install** — just open `index.html` (TASK-007)
- **No dependencies** — plain HTML/CSS/JS; nothing to install or keep updated
- **Easy to use** — simple, obvious layout (REQ-102)

### Bug Fixes

- _None._

## Breaking Changes

| Change | Migration Steps |
|--------|-----------------|
| The server app (Flask) is removed and replaced by a browser page | Run nothing; just open `index.html`. If you had a `tasks.db` from v0.1.0, its tasks are not carried over (start fresh, or re-add them). |

## Quality Summary

| Metric               | Value |
|----------------------|-------|
| Test coverage        | not measured (Lightweight mode) |
| Tests passed         | 10 / 10 (100%) — TCP-002 |
| Review findings open | 0 |
| Health score         | see `docs/dashboard.html` |
| Security findings    | 0 — no server, no accounts, no network |

## Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| Data lives in this browser, on this device (no sync) | low | use it on one device; a future sprint could add export/backup |
| Clearing browser data clears the list | low | avoid clearing site data for this page |

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

## Notes

_Scope changed mid-cycle (DEC-002): sharing removed, app simplified. The hosting
goal was dropped and the server app retired._
