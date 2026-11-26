---
gse:
  type: methodology-feedback
  sprint: 4
  created: "2026-11-26"
  status: exported
---

# Sprint 4 — Methodology Feedback

## Summary

Sprint 4 was a clean, focused 1-point fix (confirm before import). The standout
positive is the **capitalization loop** — a wrap-up idea became a delivered
feature in the next cycle. The standout negative is now unambiguous: the
**record-only commit guardrail has misfired in all four sprints** and should be
treated as a defect. Route: **local export** (`github.enabled: false`).

## Observations grouped by theme

### Theme 1: Record-only commit detection (MEDIUM — recurring ×4, treat as defect)

**Observation:** For the fourth sprint in a row, issuing a `.gse/` state edit and
its `git commit` in the same shell command caused the protect-main guardrail to
evaluate `git status` before execution and block a legitimate record-only commit
to `main` — a change the guardrail's own exception list permits.

**Source:** conversation (sprints 1–4); `.opencode/plugins/gse-guardrails.ts`.

**Proposed improvement:** Parse `git add <paths>` / `git commit -a` intent from
the command string so the guardrail can see the intended staged set before
execution. Four occurrences in four sprints — recommend a real fix rather than a
documentation note.

---

### Theme 2: Preview guardrail vs Lightweight mode (LOW — mitigated this sprint)

**Observation:** The PREVIEW guardrail did not recur as a question this sprint
(it was pre-emptively skipped with an Inform note), but the underlying condition
remains: it would fire for a `web` project in Lightweight mode where PREVIEW is
not in the workflow.

**Source:** conversation (sprints 2–4); `.gse/config.yaml` (`lifecycle.mode: lightweight`).

**Proposed improvement:** Skip the preview Gate when `preview` is already in
`workflow.skipped` for the active mode.

---

### Theme 3: The capitalization loop works (positive)

**Observation:** A wrap-up observation from sprint 3 (import had no confirmation)
became a planned TASK in sprint 4 and was delivered — demonstrating the
COMPOUND → INTEGRATE → PLAN loop turning lessons into shipped work.

**Source:** `docs/sprints/sprint-04/plan-summary.md`; backlog (TASK-010).

**Proposed improvement:** None — keep the loop.

## Totals

- **Observations collected:** 3
- **Themes produced:** 3
- **Severity split:** 0 HIGH / 1 MEDIUM (recurring ×4) / 1 LOW (mitigated) / 1 positive
- **Route chosen:** local export
- **Tickets proposed to upstream:** none (hidden — `github.enabled: false`)

## Next steps

- Theme 1: recurring defect — fix upstream (4/4 sprints).
- Theme 2: mode-aware preview skip.
- Theme 3: keep the capitalization loop.
