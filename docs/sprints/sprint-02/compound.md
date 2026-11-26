---
gse:
  type: compound
  sprint: 2
  branch: gse/sprint-02/integration
  traces:
    derives_from: [PLN-002, DEC-002]
  status: approved
  created: "2026-11-26"
  updated: "2026-11-26"
---

# Capitalization — Sprint 2

## Axe 1: Project Capitalization

### What Went Well

| Item | Impact | Reusable? |
|------|--------|-----------|
| Mid-cycle scope change (DEC-002) handled by tactical replan **before** any code was written | No wasted build; the wrong thing was never produced | yes |
| Pure logic split into `todo.js` (DOM-free) | The whole feature set is testable in Node — no browser needed for 10 checks | yes |
| Zero runtime dependencies | Nothing to install, no supply chain, nothing to keep updated | yes |
| UMD-style wrapper (one file works in Node and the browser) | No build step, no bundler; still testable | yes |

### What Could Be Improved

| Item | Root Cause | Action |
|------|------------|--------|
| The hosting goal was planned before the user reconsidered sharing | Scope was confirmed at PLAN, but the reconsideration came a step later | For small sprints, re-confirm the headline goal once more right before REQS |
| Edit saves silently on blur/Enter (no visible feedback) | Chosen for simplicity | A tiny "saved" hint could be added later if it confuses |

### Patterns Discovered

1. **Pure-logic split for browser apps** — keep the data operations in a DOM-free module; the page is then a thin render layer and the logic is unit-testable without a browser.
2. **UMD wrapper to avoid a build step** — a single file that exports to `module.exports` (Node) or `window.X` (browser) gives testability and "just open the file" at once.

### Best Practices Confirmed

1. **Replan before you build** — when scope changes mid-cycle, a tactical replan + a recorded decision prevents sunk-cost coding.
2. **Small self-contained apps** — no dependencies means no install, no audit, no version drift.

### Technical Debt

| Debt item | Impact | Remediation |
|-----------|--------|-------------|
| No export/backup of the list | Clearing browser data loses tasks | A future sprint could add an export/import to a file |
| No visible save confirmation on edit | Minor UX uncertainty | Optional small "saved" hint |

### Learning Notes Generated

| Note | Topic | Trigger |
|------|-------|---------|
| LRN-002 | How changing your mind mid-project is handled | The DEC-002 scope change during sprint 2 |

## Axe 2: Methodology Capitalization

### Observations Gathered

| Observation | Source | Theme | Severity |
|-------------|--------|-------|----------|
| The record-only commit guardrail misfired again (edit + commit in one command → blocked a legal `.gse/` commit) | conversation | record-only commit detection | MEDIUM (recurring — also sprint 1) |
| The preview guardrail fired for a `web` domain even though PREVIEW is not in the Lightweight workflow, and after a mockup had already been shown | conversation | preview guardrail vs Lightweight | LOW |
| A mid-cycle scope change was absorbed cleanly by tactical replan + DEC-002, with no rework | plan-summary.md (Scope Changes), conversation | scope-change handling (positive) | — |

### Themes (Consolidated)

| Theme | Effective practices | Friction points | Missing capabilities | Improvement proposal |
|-------|---------------------|-----------------|----------------------|----------------------|
| Record-only commit detection (recurring) | Protects `main` | Recurred this sprint — the guardrail evaluates pre-command state, so combined edit+commit blocks a legal record-only commit | No intent-aware staging detection | Promote from sprint 1: parse `git add` intent in the same command, or document the "two separate calls" rule prominently |
| Preview guardrail vs Lightweight | Keeps visual projects honest in Full mode | Fires for `web` domain even when PREVIEW is skipped by mode, duplicating a preview already shown | No mode-aware skip when preview is out of the sprint workflow | Skip the preview Gate when `preview` is in `workflow.skipped` for the mode, unless the user asks |
| Scope-change handling (positive) | Tactical replan + DEC before building avoided rework | none | none | Keep as-is; consider surfacing this as a documented pattern for beginners |

### Closure Gate Outcome

- **Observations collected:** 3
- **Themes identified:** 3
- **Route chosen:** local export (upstream tickets hidden — `github.enabled: false`)
- **References:**
  - `methodology-feedback.md`: produced
  - `compound-tickets-draft.yaml`: not produced

## Axe 3: Competency Capitalization

### Learning Notes Updated / Created

| LRN- | Topic | Source (sprint evidence) | Note file |
|------|-------|--------------------------|-----------|
| LRN-002 | How changing your mind mid-project is handled | DEC-002 scope change, tactical replan | `docs/learning/LRN-002.md` |

### Competency Map Updates

| Area | Before | After | Evidence |
|------|--------|-------|----------|
| software-lifecycle | explained | practiced | Completed a second full cycle, including a mid-cycle change |
| scope-management | not-seen | explained | Experienced a real scope change and how it was recorded/replanned |
| testing | mentioned | mentioned | 10 checks run and interpreted (Node) |

### Proactive LEARN Proposals

1. **Backing up your data** — why a browser-only list can be lost and how an export would protect it. Rationale: flagged as technical debt this sprint.

## Integration Outcomes

*Populated by `/gse:integrate` — runs after COMPOUND. Empty until integration runs.*

## Summary

### Key Metrics

| Metric | Value |
|-------------------------------|-------------|
| Items completed | 1 / 1 |
| Complexity consumed | 3 / 10 pts |
| Review findings resolved | 0 (none raised) |
| Learning notes generated | 1 |
| Health score delta | 9.5 → 9.8 |

### Top 3 Takeaways

1. **Changing your mind is cheap when caught before building** — the replan happened at PLAN/REQS, so no code was wasted.
2. **A DOM-free logic layer makes a browser app testable** — 10 checks ran in Node with no browser.
3. **The commit-guardrail friction is recurring** — it repeated from sprint 1 and is worth fixing at the source.
