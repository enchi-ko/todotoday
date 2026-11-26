---
gse:
  type: compound
  sprint: 1
  branch: gse/sprint-01/integration
  traces:
    derives_from: [PLN-001]
  status: approved
  created: "2026-11-26"
  updated: "2026-11-26"
---

# Capitalization — Sprint 1

## Axe 1: Project Capitalization

_What was learned during this sprint that improves future production._

### What Went Well

| Item | Impact | Reusable? |
|------|--------|-----------|
| Requirements-first surfaced the architectural decision (shared store) before any code | Avoided a likely rework of the storage model | yes |
| Acceptance criteria written as testable statements made the test suite trivial to derive | 13 tests, 100% pass, first run | yes |
| One shared store (SQLite) satisfied "shared without logins" in a single, small component | Minimal architecture, easy to host | yes |
| Cross-instance test (two app instances, one DB) proved sharing without a browser | Fast, deterministic proof of REQ-004 | yes |

### What Could Be Improved

| Item | Root Cause | Action |
|------|------------|--------|
| Four planned feature branches for a tiny cohesive app | Plan-time task decomposition was finer than the build warranted | For small apps (< ~10 pts, one component), plan one branch per deliverable, not per goal |
| `app = create_app()` at import time creates `tasks.db` during tests | Module-level side effect | Move to lazy init / a proper app-factory entry point in a future cleanup |

### Patterns Discovered

1. **Shared-store-minimalism** — When "shared" is required but "accounts" are excluded, a single server-side store behind one page is the smallest architecture that works. Reach for it before reaching for auth or sync frameworks.
2. **Cross-instance sharing test** — Prove sharing by pointing two independent app instances at the same database file; it isolates "shared storage" from "browser session" cleanly.

### Best Practices Confirmed

1. **Test-driven acceptance criteria** — Writing Given/When/Then criteria at REQS made TESTS fall out mechanically; no test design gap.
2. **Beginner-safe manual verification** — Providing a numbered browser walkthrough (add → done → edit → delete → second tab) complements automated tests with human validation.

### Technical Debt

| Debt item | Impact | Remediation |
|-----------|--------|-------------|
| `tasks.db` created on import (module-level `create_app()`) | Stray file; test isolation relies on an explicit `db_path` | Convert to an app-factory entry point; keep `create_app()` pure |
| No deployment/hosting | Both users can only reach it on a local network | A future sprint can deploy it (Hetzner/Coolify is available in the toolchain) |
| No real-time sync | Other person must refresh to see changes | Acceptable for MVP; revisit if it annoys |

### Learning Notes Generated

| Note | Topic | Trigger |
|------|-------|---------|
| LRN-001 | How a software project is built (the full cycle) | User's learning goal: "How software projects are built" |

## Axe 2: Methodology Capitalization

_What worked and what did not in the GSE-One methodology itself this sprint._

### Observations Gathered

| Observation | Source | Theme | Severity |
|-------------|--------|-------|----------|
| A state-file edit and its `git commit` issued in one shell command made the protect-main guardrail evaluate the pre-state and falsely block a legitimate record-only commit (twice) | conversation | record-only commit detection | MEDIUM |
| The plan created four feature branches for one small cohesive app; they were consolidated into one at produce time | plan-summary.md (scope_changes) | branch granularity for small projects | MEDIUM |
| Lightweight mode skips DESIGN, but two intent questions (OQ-001/002) were tagged `resolves_in: DESIGN` and had to be re-tagged to REQS to be consumed | intent.md, conversation | open-question routing across skipped activities | MEDIUM |
| The app was not runnable from `main` until DELIVER (code lived on the sprint branch) — the first smoke test failed for that reason | conversation | verification timing vs branch model | LOW |

### Themes (Consolidated)

| Theme | Effective practices | Friction points | Missing capabilities | Improvement proposal |
|-------|---------------------|-----------------|----------------------|----------------------|
| Record-only commit detection | Guardrail correctly protects `main` from direct code commits | Guardrail evaluates `git status` before the command runs, so a combined edit+commit looks like an empty/non-record change and blocks a legal record-only commit | No way for the guardrail to see the *intended* post-command staged set | Document (or fix) the rule: issue state-file edits and their commit as two separate tool calls; consider having the guardrail parse `git add` intent from the same command string |
| Branch granularity for small projects | Per-task branches scale well for large sprints | PLAN assigns one branch per TASK even when TASKs form one tiny cohesive app | No mode/rule for "consolidate branches when sprint is small and single-component" | Add a PLAN-time heuristic: when a sprint is ≤ ~10 pts and single-component, propose one feature branch for the sprint's deliverable |
| Open-question routing across skipped activities | The activity-entry scan cleanly consumes OQs at their home activity | OQs tagged `resolves_in: DESIGN` dangle when the mode skips DESIGN | No automatic re-tag/redirect when the target activity is skipped by mode | At PLAN (or at the first concerned activity), detect OQs whose target activity is in `workflow.skipped` and offer to re-tag them to the nearest invoked activity |

### Closure Gate Outcome

- **Observations collected:** 4
- **Themes identified:** 3
- **Route chosen:** local export (upstream tickets hidden — `github.enabled: false`)
- **References:**
  - `methodology-feedback.md`: produced
  - `compound-tickets-draft.yaml`: not produced

## Axe 3: Competency Capitalization

_User's learning journey._

### Learning Notes Updated / Created

| LRN- | Topic | Source (sprint evidence) | Note file |
|------|-------|--------------------------|-----------|
| LRN-001 | How a software project is built — the full cycle | The whole sprint (intent → plan → reqs → build → deliver) | `docs/learning/LRN-001.md` |

### Competency Map Updates

| Area | Before | After | Evidence |
|------|--------|-------|----------|
| software-lifecycle | not-seen | explained | Walked the full cycle end-to-end with the user |
| git-branching | not-seen | mentioned | Branches created, merged, tagged, cleaned during delivery |
| testing | not-seen | mentioned | 13 automated checks were run and interpreted |

### Proactive LEARN Proposals

1. **How the parts fit together** — the page, the server, and the database (front-end / back-end / storage). Rationale: the user built a 3-part app but the parts were not named during the build.

## Integration Outcomes

*Populated by `/gse:integrate` — runs after COMPOUND. Empty until integration runs.*

## Summary

### Key Metrics

| Metric | Value |
|-------------------------------|-------------|
| Items completed | 4 / 4 |
| Complexity consumed | 8 / 10 pts |
| Review findings resolved | 0 (none raised) |
| Learning notes generated | 1 |
| Health score delta | 0.0 → 9.5 (first measured sprint) |

### Top 3 Takeaways

1. **Requirements-first paid off** — the one architectural decision (shared store) was made before code, avoiding rework.
2. **Small app ≠ many branches** — the plan was finer-grained than the build; a small sprint is better served by one branch per deliverable.
3. **Guardrail timing is a real friction** — record-only state commits must be issued separately from their edits, or the protect-main guardrail misfires.
