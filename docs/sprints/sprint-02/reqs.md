---
gse:
  type: requirement
  sprint: 2
  branch: gse/sprint-02/integration
  elicitation_summary: |
    Scope revised this cycle (DEC-002): personal, single-user list, browser-only.
    User confirmed "just the basics": add, view, mark done, edit, delete — saved in
    the browser. Quality expectation carried over: easy to use.
  traces:
    derives_from: [PLN-002, DEC-002]
    decided_by: [DEC-002]
  status: approved
  created: "2026-11-26"
  updated: "2026-11-26"
---

# Requirements — Sprint 2

> ID convention: REQ-001..REQ-099 functional, REQ-101..REQ-199 non-functional.
> Sprint 1 used REQ-001..005 and REQ-101; this sprint continues at REQ-006 / REQ-102.
> **Sprint 1's REQ-002 and REQ-004 (sharing) are retired by DEC-002.**

## Functional Requirements

### REQ-006 — Add a task

- **Type:** functional
- **Actor:** the user (single person)
- **Capability:** add a new task with a short title
- **Rationale:** record something that needs doing
- **Priority:** Must
- **Acceptance Criteria:**
  1. Given the page is open, when I type a task title and confirm, then the task appears in the list.
  2. Given an empty title, when I confirm, then no task is added.
- **Traces:** derives_from (TASK-007) | tested_by (—)

### REQ-007 — See my list

- **Type:** functional
- **Actor:** the user
- **Capability:** see all my current tasks in one list
- **Rationale:** know what is to do
- **Priority:** Must
- **Acceptance Criteria:**
  1. Given tasks exist, when I open the page, then I see all of them.
- **Traces:** derives_from (TASK-007) | tested_by (—)

### REQ-008 — Mark a task done (and undo)

- **Type:** functional
- **Actor:** the user
- **Capability:** mark a task as done, and undo it
- **Rationale:** track progress
- **Priority:** Must
- **Acceptance Criteria:**
  1. Given a task, when I mark it done, then it is shown as done.
  2. Given a done task, when I unmark it, then it is shown as not done again.
- **Traces:** derives_from (TASK-007) | tested_by (—)

### REQ-009 — Edit or remove a task

- **Type:** functional
- **Actor:** the user
- **Capability:** correct a task's title or delete a task
- **Rationale:** tasks change and get mistyped
- **Priority:** Must
- **Acceptance Criteria:**
  1. Given a task, when I edit its title, then the change is shown in the list.
  2. Given a task, when I delete it, then it no longer appears.
- **Traces:** derives_from (TASK-007) | tested_by (—)

### REQ-010 — My list is saved in the browser

- **Type:** functional
- **Actor:** the user
- **Capability:** my tasks are remembered between visits
- **Rationale:** a to-do list is useless if it forgets
- **Priority:** Must
- **Acceptance Criteria:**
  1. Given tasks in the list, when I close the page and open it again, then the same tasks are still there (with their done state).
- **Traces:** derives_from (TASK-007, DEC-002) | tested_by (—)

## Non-Functional Requirements

### REQ-102 — Usability: easy to use

- **Type:** non-functional
- **Metric:** first-time usability
- **Target:** a first-time user can add a task and mark it done without instructions
- **Measurement:** manual walkthrough by a person who has not seen the app before
- **Priority:** Must
- **Acceptance Criteria:**
  1. Given a first-time user, when they open the page, then they can add a task and mark it done without instructions.
- **Traces:** derives_from (TASK-007)

## Traceability Matrix

| Req ID  | Design | Tests | Status   |
|---------|--------|-------|----------|
| REQ-006 |        |       | draft    |
| REQ-007 |        |       | draft    |
| REQ-008 |        |       | draft    |
| REQ-009 |        |       | draft    |
| REQ-010 |        |       | draft    |
| REQ-102 |        |       | draft    |

## Open Questions

_None. The scope question was resolved by DEC-002; the user confirmed the basic feature set during elicitation._
