---
gse:
  type: methodology-feedback
  sprint: 2
  created: "2026-11-26"
  status: exported
---

# Sprint 2 — Methodology Feedback

## Summary

Sprint 2 was short and clean: a mid-cycle scope change was absorbed without
rework, and the browser-only rebuild passed 10/10 checks first run. Three
observations were consolidated into three themes — one **recurring** MEDIUM
(the record-only commit guardrail), one LOW (preview guardrail vs Lightweight),
and one positive (scope-change handling). Route: **local export**
(`github.enabled: false`).

## Observations grouped by theme

### Theme 1: Record-only commit detection (MEDIUM — recurring from sprint 1)

**Observation:** For the second sprint running, issuing a `.gse/` state edit and
its `git commit` in the same shell command made the protect-main guardrail
evaluate `git status` *before* the command ran, so the pending change looked
non-record and a legitimate record-only commit to `main` was blocked. The work
was a pure `.gse/` change that the guardrail's own exception list permits.

**Source:** conversation (sprints 1 and 2); `.opencode/plugins/gse-guardrails.ts`.

**Proposed improvement:** Make the guardrail parse `git add <paths>` / `git commit -a`
intent from the same command string so it can see the intended staged set before
execution — or, at minimum, document the "issue edits and their commit as two
separate calls" rule where activity authors will see it.

---

### Theme 2: Preview guardrail vs Lightweight mode (LOW)

**Observation:** The PREVIEW guardrail fired for a `web` project even though
PREVIEW is not part of the Lightweight workflow (`[plan, reqs, produce, deliver]`),
and after a mockup had already been shown to the user — so it read as a
redundant question.

**Source:** conversation; `.gse/config.yaml` (`lifecycle.mode: lightweight`).

**Proposed improvement:** Skip the preview Gate when `preview` is already in
`workflow.skipped` for the active mode, unless the user explicitly asks for a
preview.

---

### Theme 3: Scope-change handling (positive)

**Observation:** A genuine mid-cycle scope change (drop sharing, go browser-only)
was captured as DEC-002, replanned tactically before any production, and
delivered with zero rework. This is exactly the behaviour the methodology wants —
worth reinforcing and surfacing as a documented beginner-friendly pattern.

**Source:** `docs/sprints/sprint-02/plan-summary.md` (Scope Changes); `.gse/decisions.md` (DEC-002).

**Proposed improvement:** None required — consider adding this to the beginner
guidance as a worked example of "changing your mind is cheap before you build".

## Totals

- **Observations collected:** 3
- **Themes produced:** 3
- **Severity split:** 0 HIGH / 1 MEDIUM / 1 LOW / 1 positive
- **Route chosen:** local export
- **Tickets proposed to upstream:** none (hidden — `github.enabled: false`)

## Next steps

- Theme 1 recurred from sprint 1 — worth acting on if a third sprint shows it again.
- Share this file through any channel if useful.
