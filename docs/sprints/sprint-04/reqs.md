---
gse:
  type: requirement
  sprint: 4
  branch: gse/sprint-04/integration
  elicitation_summary: |
    Import replaces the list with no warning today. Add a simple confirmation
    (OK / Cancel) before the current list is replaced. Keep it simple.
  traces:
    derives_from: [PLN-004]
    decided_by: []
  status: approved
  created: "2026-11-26"
  updated: "2026-11-26"
---

# Requirements — Sprint 4

> ID convention: REQ-001..REQ-099 functional, REQ-101..REQ-199 non-functional.
> Continues from sprint 3 (REQ-011..013).

## Functional Requirements

### REQ-014 — Confirm before import replaces the list

- **Type:** functional
- **Actor:** the user
- **Capability:** be warned before an import overwrites the current list
- **Rationale:** a mis-click could replace the list; a confirmation prevents accidental loss
- **Priority:** Could
- **Acceptance Criteria:**
  1. Given I choose a valid backup file to import, when the file is read, then I am asked to confirm before my list is replaced.
  2. Given the confirmation, when I cancel, then my current list is left unchanged.
  3. Given the confirmation, when I confirm, then my list is replaced by the file's contents.
- **Traces:** derives_from (TASK-010) | tested_by (—)

## Non-Functional Requirements

_No new NFRs. REQ-102 (usability: easy to use, sprint 2) applies to the confirmation._

## Traceability Matrix

| Req ID  | Design | Tests | Status   |
|---------|--------|-------|----------|
| REQ-014 |        |       | draft    |

## Open Questions

_None. The confirmation style was resolved during elicitation: a simple OK / Cancel._
