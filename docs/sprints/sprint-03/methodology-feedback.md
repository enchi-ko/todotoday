---
gse:
  type: methodology-feedback
  sprint: 3
  created: "2026-11-26"
  status: exported
---

# Sprint 3 — Methodology Feedback

## Summary

Sprint 3 delivered backup/export cleanly, with a growing test suite (10 → 17)
and no regressions across three sprints. Two methodology frictions are now
**clearly recurring** — the record-only commit guardrail (3rd sprint) and the
preview guardrail vs Lightweight (2nd sprint) — and are worth fixing rather than
re-noting. Route: **local export** (`github.enabled: false`).

## Observations grouped by theme

### Theme 1: Record-only commit detection (MEDIUM — recurring ×3)

**Observation:** For the third sprint running, a `.gse/` state edit issued in the
same shell command as its `git commit` caused the protect-main guardrail to
evaluate `git status` before execution and block a legitimate record-only commit
to `main`. The change was permitted by the guardrail's own exception list.

**Source:** conversation (sprints 1, 2, 3); `.opencode/plugins/gse-guardrails.ts`.

**Proposed improvement:** Make the guardrail parse `git add <paths>` / `git commit -a`
intent from the command string so it can see the intended staged set before
execution. This is the third occurrence — recommend treating it as a real defect.

---

### Theme 2: Preview guardrail vs Lightweight mode (LOW — recurring ×2)

**Observation:** The PREVIEW guardrail fired again for a `web` project in
Lightweight mode, where PREVIEW is not part of the sprint workflow.

**Source:** conversation (sprints 2, 3); `.gse/config.yaml` (`lifecycle.mode: lightweight`).

**Proposed improvement:** Skip the preview Gate when `preview` is already in
`workflow.skipped` for the active mode, unless the user explicitly asks for a preview.

---

### Theme 3: Regression safety (positive)

**Observation:** The test suite grew from 10 to 17 across the sprint, and all
prior tests continued to pass — features were added without breaking earlier
behaviour.

**Source:** `docs/sprints/sprint-03/test-reports/campaign-003.md`; TCP-001/002/003.

**Proposed improvement:** None — the pure-logic-plus-tests pattern is working;
keep it.

## Totals

- **Observations collected:** 3
- **Themes produced:** 3
- **Severity split:** 0 HIGH / 1 MEDIUM (recurring ×3) / 1 LOW (recurring ×2) / 1 positive
- **Route chosen:** local export
- **Tickets proposed to upstream:** none (hidden — `github.enabled: false`)

## Next steps

- Theme 1 is a recurring defect (3/3 sprints) — recommend an upstream fix.
- Theme 2 recurred twice — recommend a mode-aware skip.
- Re-run `/gse:compound` Axe 2 after the next sprint to confirm both remain open.
