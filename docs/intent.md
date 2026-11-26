---
id: INT-001
artefact_type: intent
title: "TODOTODAY — Project Intent"
sprint: 0
status: approved
created: "2026-11-26"
author: pair
traces:
  derives_from: []
---

# TODOTODAY — Project Intent

## Description (verbatim user statement)

> "I would like a TO DO list"
>
> "Personal tasked shared with an other person - makrking things done"

## Reformulated understanding

- A simple to-do list for **personal tasks**.
- **Shared with one other person** — both people see and update the same list.
- The ability to **mark tasks as done**.
- Keep it minimal: no accounts, no logins — just open and use it.

## Users

Small shared pool — **2 people** (you and one other person), **no accounts or authentication**.

## Boundaries (explicit out-of-scope)

- **No accounts or logins** — no sign-up, no passwords (explicitly chosen by the user).

## Open Questions

_Structured ambiguities auto-consumed by the **activity-entry scan** (spec P6). Each entry is scanned at the first step of `/gse:assess`, `/gse:plan`, `/gse:reqs`, or `/gse:design` based on its `resolves_in` tag._

- **OQ-001** — How should the two people share the same list if there are no accounts or logins (e.g., a single shared page/URL, a hosted web app)?
  - resolves_in: REQS
  - impact: architectural
  - status: pending
  - raised_at: INT-001
  - note: "Re-tagged DESIGN → REQS: Lightweight mode skips the DESIGN activity, so the sharing decision is settled during REQS."

- **OQ-002** — Where should the tasks be stored so both people see the same data (a shared server, a hosted service, etc.)?
  - resolves_in: REQS
  - impact: architectural
  - status: pending
  - raised_at: INT-001
  - note: "Re-tagged DESIGN → REQS: Lightweight mode skips the DESIGN activity."

- **OQ-003** — Should both people be able to add, edit, and delete tasks, or only mark them as done?
  - resolves_in: REQS
  - impact: behavioral
  - status: pending
  - raised_at: INT-001

- **OQ-004** — What information does each task carry (just a short title, or also a note/description)?
  - resolves_in: REQS
  - impact: behavioral
  - status: pending
  - raised_at: INT-001

- **OQ-005** — What should happen to completed tasks (stay visible with a check, or be hidden/archived)?
  - resolves_in: REQS
  - impact: cosmetic
  - status: pending
  - raised_at: INT-001
