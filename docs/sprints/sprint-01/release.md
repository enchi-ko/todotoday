---
gse:
  type: release
  sprint: 1
  branch: gse/sprint-01/integration
  traces:
    implements: [TASK-001, TASK-002, TASK-003, TASK-004]
  status: approved
  version: "0.1.0"
  tag: "v0.1.0"
  commit: "2ea08f8"
  created: "2026-11-26"
  updated: "2026-11-26"
---

# Release Notes — 0.1.0

## Overview

TODOTODAY 0.1.0 is the first release: a minimal **shared to-do list for two
people**. Both users open one web page and see the same tasks — add, mark done,
edit, and delete — with no accounts or logins. Built as a small Flask app backed
by SQLite, so the list is genuinely shared rather than per-browser.

## What's New

### Features

- **Add a task** — type a short title and it appears in the shared list (TASK-001, REQ-001)
- **View the shared list** — both people see the same tasks from one shared store (TASK-001, REQ-002)
- **Mark a task done** — check it off, and undo (TASK-002, REQ-003)
- **Share one list, no logins** — open the same address, no accounts or passwords (TASK-003, REQ-004)
- **Edit or remove a task** — fix a title inline, or delete a task (TASK-004, REQ-005)

### Improvements

- **Easy to use** — simple, obvious layout; a first-time user can add and complete a task without instructions (REQ-101)

### Bug Fixes

- _None — first release._

## Breaking Changes

| Change | Migration Steps |
|--------|-----------------|
| _None — first release._ | |

## Quality Summary

| Metric               | Value |
|----------------------|-------|
| Test coverage        | not measured (Lightweight mode) |
| Tests passed         | 13 / 13 (100%) — TCP-001 |
| Review findings open | 0 (no REVIEW in Lightweight mode; minimal integrity pass clean) |
| Health score         | see `docs/dashboard.html` |
| Security findings    | 0 — no auth surface by design; app binds to localhost by default |

## Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| Reachability is local-only by default | low | set `TODOTODAY_HOST=0.0.0.0` to share on your network, or host it |
| No real-time sync — the other person sees changes after refreshing | low | refresh the page |

## Dependencies

| Dependency | Version | Change |
|------------|---------|--------|
| Flask      | 3.1.3   | new    |
| pytest     | 9.2.0   | new (dev) |

## Installation / Upgrade

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python app.py
# open http://127.0.0.1:5000
```

## Contributors

- Built by GSE-One with TODOTODAY (pair: AI agent + user)

## Sprint History

| Sprint | Goal | Items Completed |
|--------|------|-----------------|
| 1 | A minimal shared to-do list for two people | 4 |

## Notes

_First release. Delivered on one feature branch (the four goals form one small,
tightly-coupled app) — see the produce summary for the branch-consolidation
decision._
