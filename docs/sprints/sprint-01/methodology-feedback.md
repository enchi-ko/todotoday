---
gse:
  type: methodology-feedback
  sprint: 1
  created: "2026-11-26"
  status: exported
---

# Sprint 1 — Methodology Feedback

## Summary

This sprint ran smoothly end-to-end (HUG → GO → PLAN → REQS → PRODUCE → DELIVER →
COMPOUND) with no blocked work and a first-run green test suite. Four observations
were consolidated into three themes, all MEDIUM/LOW friction rather than
breakage. Route chosen: **local export** (upstream ticket proposal is hidden
because `github.enabled: false`).

## Observations grouped by theme

### Theme 1: Record-only commit detection (MEDIUM)

**Observation:** When a `.gse/` state-file edit and its `git commit` were issued in
the same shell command, the protect-main guardrail evaluated `git status` *before*
the command executed — so the pending change looked empty/non-record and the
guardrail blocked a legitimate record-only commit to `main`. It fired twice
(the `/gse:hug` status record and the `/gse:deliver` close record); both times the
work was a pure `.gse/` change that the guardrail's own exception list permits.

**Source:** conversation (orchestrator session); `.opencode/plugins/gse-guardrails.ts`
(commit-detection branch).

**Proposed improvement:** Either (a) document the operational rule prominently —
issue state edits and their commit as two separate tool calls; or (b) make the
guardrail parse `git add <paths>` / `git commit -a` intent from the same command
string so it can see the intended staged set before execution.

---

### Theme 2: Branch granularity for small projects (MEDIUM)

**Observation:** PLAN assigned one feature branch per TASK — four branches for a
sprint of 8 points that produced a single small, single-component app. At PRODUCE
time the four branches were consolidated into one (recorded in
`plan-summary.md → Scope Changes`) to avoid four near-identical branches and
merge conflicts.

**Source:** `docs/sprints/sprint-01/plan-summary.md` (Scope Changes);
`docs/sprints/sprint-01/produce-summary.md` (Inform-tier decisions).

**Proposed improvement:** Add a PLAN-time heuristic: when a sprint is small
(≤ ~10 points) and single-component, propose **one feature branch for the
sprint's deliverable** rather than one per TASK, while still committing once per
TASK.

---

### Theme 3: Open-question routing across skipped activities (MEDIUM)

**Observation:** Two intent-level questions (OQ-001 how to share, OQ-002 where to
store) were tagged `resolves_in: DESIGN`. The chosen mode was Lightweight, whose
workflow skips DESIGN, so the questions had no consumer until they were manually
re-tagged to REQS.

**Source:** `docs/intent.md` (OQ-001, OQ-002 — re-tag notes);
`.gse/plan.yaml` (mode: lightweight).

**Proposed improvement:** At PLAN (or at the first concerned activity), detect
OQs whose target activity is in `workflow.skipped` and offer to re-tag them to
the nearest invoked activity, rather than leaving them to be discovered later.

---

### Theme 4: Verification timing vs branch model (LOW)

**Observation:** Because code lives on the sprint branch until DELIVER, the app
was not runnable from `main` when a smoke test was first attempted; it had to be
run from the integration branch.

**Source:** conversation.

**Proposed improvement:** Expected behaviour of the branch model, not a defect —
worth a one-line note in PRODUCE's manual-verification guidance so it does not
look like a failure.

## Totals

- **Observations collected:** 4
- **Themes produced:** 4
- **Severity split:** 0 HIGH / 3 MEDIUM / 1 LOW
- **Route chosen:** local export
- **Tickets proposed to upstream:** none (hidden — `github.enabled: false`)

## Next steps

- Share this file through any channel (email, chat, manual issue) if useful.
- Re-run `/gse:compound` Axe 2 after a few sprints to check whether these themes
  recur (especially the guardrail-timing theme).
