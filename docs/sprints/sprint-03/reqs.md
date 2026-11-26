---
gse:
  type: requirement
  sprint: 3
  branch: gse/sprint-03/integration
  elicitation_summary: |
    User wants to back up the list: export it to a file and import it back.
    Chosen behaviour on import: REPLACE the current list with the file's contents.
    Plus a small confirmation when an edit is saved.
  traces:
    derives_from: [PLN-003]
    decided_by: []
  status: approved
  created: "2026-11-26"
  updated: "2026-11-26"
---

# Requirements — Sprint 3

> ID convention: REQ-001..REQ-099 functional, REQ-101..REQ-199 non-functional.
> Continues from sprint 2 (REQ-006..010, REQ-102).

## Functional Requirements

### REQ-011 — Export my list to a file

- **Type:** functional
- **Actor:** the user
- **Capability:** save all my tasks to a file
- **Rationale:** protect against losing the list (e.g. clearing browser data), and move it between devices
- **Priority:** Should
- **Acceptance Criteria:**
  1. Given tasks in my list, when I export, then a file is produced containing my tasks with their titles and done-state.
  2. Given an empty list, when I export, then a valid (empty) file is still produced.
- **Traces:** derives_from (TASK-008) | tested_by (—)

### REQ-012 — Import my list from a file (replaces current list)

- **Type:** functional
- **Actor:** the user
- **Capability:** load tasks from a previously exported file
- **Rationale:** restore a backup
- **Priority:** Should
- **Acceptance Criteria:**
  1. Given a backup file, when I import it, then my list is **replaced** by the tasks in the file (with their done-state).
  2. Given an invalid or unreadable file, when I import it, then my current list is left unchanged and I am told it could not be read.
- **Traces:** derives_from (TASK-008) | tested_by (—)

### REQ-013 — Confirmation when an edit is saved

- **Type:** functional
- **Actor:** the user
- **Capability:** see that my edit was saved
- **Rationale:** editing saves silently today, which is unclear
- **Priority:** Could
- **Acceptance Criteria:**
  1. Given I edit a task's title, when the change is saved, then a brief confirmation appears.
- **Traces:** derives_from (TASK-009) | tested_by (—)

## Non-Functional Requirements

_No new NFRs this sprint. REQ-102 (usability: easy to use, sprint 2) continues to apply to all new controls._

## Traceability Matrix

| Req ID  | Design | Tests | Status   |
|---------|--------|-------|----------|
| REQ-011 |        |       | draft    |
| REQ-012 |        |       | draft    |
| REQ-013 |        |       | draft    |

## Open Questions

_None. The import-behaviour question (replace vs merge) was resolved during elicitation: **replace**._
