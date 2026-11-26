---
gse:
  id: TCP-003
  type: test-campaign
  sprint: 3
  branch: gse/sprint-03/integration
  traces:
    implements: [REQ-011, REQ-012, REQ-013]
    derives_from: [TASK-008, TASK-009]
  created: "2026-11-26"
---

# Test Campaign TCP-003 — Sprint 3 (TASK-008, TASK-009)

## Summary
- Executed: 17 tests (17 unit — task logic, 0 E2E)
- Passed: 17 (100%)
- Failed: 0
- Duration: 0.20 seconds
- Code coverage: not measured (Lightweight mode)

## Failures

| ID | Test | Expected | Got | Linked to |
|----|------|----------|-----|-----------|
| —  | —    | —        | —   | —         |

## Evidence

- Command: `node --test tests/`
- Result: `# pass 17 / # fail 0`

## Requirements Coverage

| REQ ID  | Test Cases | Status |
|---------|------------|--------|
| REQ-011 | `export produces JSON containing the tasks`, `export of an empty list is valid JSON` | pass |
| REQ-012 | `import restores tasks from exported text`, `import rejects text that is not JSON`, `import rejects a JSON value that is not a list`, `import rejects a task with an empty title`, `import normalises missing fields` | pass |
| REQ-013 | _UI-layer only_ — the save confirmation is a page behaviour; verified by the manual walkthrough | partial |

## Notes

_Export/import logic is pure and tested. The file download/upload and the "Saved"
hint are thin DOM layers over that logic (REQ-013 is a UI confirmation, checked
manually). The previous sprint's 10 tests still pass — no regressions._
