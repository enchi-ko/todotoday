---
gse:
  id: TCP-002
  type: test-campaign
  sprint: 2
  branch: gse/sprint-02/integration
  traces:
    implements: [REQ-006, REQ-007, REQ-008, REQ-009, REQ-010, REQ-102]
    derives_from: [TASK-007]
  created: "2026-11-26"
---

# Test Campaign TCP-002 — Sprint 2 / TASK-007

## Summary
- Executed: 10 tests (10 unit — task logic, 0 E2E)
- Passed: 10 (100%)
- Failed: 0
- Duration: 0.18 seconds
- Code coverage: not measured (Lightweight mode)

## Failures

| ID | Test | Expected | Got | Linked to |
|----|------|----------|-----|-----------|
| —  | —    | —        | —   | —         |

## Evidence

- Command: `node --test tests/`
- Result: `# pass 10 / # fail 0`

## Requirements Coverage

| REQ ID  | Test Cases | Status |
|---------|------------|--------|
| REQ-006 | `add a task`, `an empty title is not added` | pass |
| REQ-007 | `view: tasks are returned in order` | pass |
| REQ-008 | `mark done and undo` | pass |
| REQ-009 | `edit a task title`, `an empty edit keeps the previous title`, `delete a task` | pass |
| REQ-010 | `tasks are saved and reloaded`, `load returns an empty list when nothing is saved`, `load recovers from corrupt saved data` | pass |
| REQ-102 | _UI-layer only_ — the logic is covered; the "no instructions" walkthrough is a manual check | partial |

## Notes

_The task logic (`todo.js`) is pure and tested without a browser. The page glue
(`index.html`) is a thin DOM layer over that logic; REQ-102 (first-time
usability) is verified by the manual walkthrough in the produce summary._
