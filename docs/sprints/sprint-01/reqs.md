---
gse:
  type: requirement
  sprint: 1
  branch: gse/sprint-01/integration
  elicitation_summary: |
    User's words: "I would like a TO DO list" / "Personal tasked shared with an other person - makrking things done".
    Agent reformulation: A minimal shared to-do list for two people. Add tasks, see the same list from both
    sides, mark tasks done, and edit or remove tasks — with no accounts or logins. Quality expectation:
    it must be easy to use (simple and obvious, no instructions needed).
  traces:
    derives_from: [PLN-001]
    decided_by: [DEC-001]
  status: approved
  created: "2026-11-26"
  updated: "2026-11-26"
---

# Requirements — Sprint 1

> ID convention: REQ-001..REQ-099 for functional requirements, REQ-101..REQ-199
> for non-functional requirements. The `type` field per REQ remains authoritative.

## Functional Requirements

### REQ-001 — Add a task

- **Type:** functional
- **Actor:** one of the two users
- **Capability:** add a new task with a short title
- **Rationale:** the core purpose — record something that needs doing
- **Priority:** Must
- **Acceptance Criteria:**
  1. Given the list is open, when I type a task title and confirm, then the task appears in the list.
  2. Given an empty title, when I confirm, then no task is added.
- **Traces:** derives_from (TASK-001) | tested_by (—)

### REQ-002 — View the shared list

- **Type:** functional
- **Actor:** either user
- **Capability:** see all current tasks in one list
- **Rationale:** both people need to see what is to do
- **Priority:** Must
- **Acceptance Criteria:**
  1. Given tasks exist, when I open the app, then I see all of them.
  2. Given both people have the app open, when one adds or changes a task, then the other sees the change after refreshing the page.
- **Traces:** derives_from (TASK-001, TASK-003) | tested_by (—)

### REQ-003 — Mark a task as done

- **Type:** functional
- **Actor:** either user
- **Capability:** mark a task as done (and undo it)
- **Rationale:** track progress on tasks
- **Priority:** Must
- **Acceptance Criteria:**
  1. Given a task, when I mark it done, then it is shown as done in the list.
  2. Given a done task, when I unmark it, then it is shown as not done again.
- **Traces:** derives_from (TASK-002) | tested_by (—)

### REQ-004 — Share one list between two people, no logins

- **Type:** functional
- **Actor:** the two users together
- **Capability:** both open the same list via a shared link, without signing in
- **Rationale:** the list must be shared — the same tasks seen by both people
- **Priority:** Must
- **Acceptance Criteria:**
  1. Given the shared link, when either person opens it in a browser, then they see the same tasks.
  2. Given the app, when a person uses it, then no account, password, or sign-in is required.
- **Traces:** derives_from (TASK-003) | tested_by (—) | decided_by (DEC-001)

### REQ-005 — Edit or remove a task

- **Type:** functional
- **Actor:** either user
- **Capability:** correct a task's title or delete a task
- **Rationale:** tasks change and get mistyped
- **Priority:** Should
- **Acceptance Criteria:**
  1. Given a task, when I edit its title, then the change is visible in the list for both people.
  2. Given a task, when I delete it, then it no longer appears in the list.
- **Traces:** derives_from (TASK-004) | tested_by (—)

## Non-Functional Requirements

### REQ-101 — Usability: easy to use

- **Type:** non-functional
- **Metric:** first-time usability
- **Target:** a first-time user can add a task and mark it done without any instructions
- **Measurement:** manual walkthrough by a person who has not seen the app before
- **Priority:** Must
- **Acceptance Criteria:**
  1. Given a first-time user, when they open the app, then they can add a task and mark it done without instructions.
- **Traces:** derives_from (TASK-001, TASK-002)

## Traceability Matrix

| Req ID  | Design | Tests | Status   |
|---------|--------|-------|----------|
| REQ-001 |        |       | draft    |
| REQ-002 |        |       | draft    |
| REQ-003 |        |       | draft    |
| REQ-004 |        |       | draft    |
| REQ-005 |        |       | draft    |
| REQ-101 |        |       | draft    |

## Open Questions

_No new open questions raised at REQS. The intent-level questions (OQ-001 … OQ-005) were resolved at the Step 0 gate — see `docs/intent.md`._
