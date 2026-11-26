# Decision Journal

<!-- Append DEC-NNN entries below. Gate/Inform: full format. Auto-tier: logged in decisions-auto.log. -->
<!-- Target: .gse/decisions.md -->
<!-- This is the AUTHORITATIVE format — spec §11 and activities reference this template. -->

### DEC-001 — Shared list via a small hosted web app with server-side storage

- **Sprint:** 1
- **Type:** architectural
- **Tier:** Gate
- **Date:** 2026-11-26
- **Decision:** The two users share one to-do list through a small web app (a single browser page) backed by a tiny server that stores the tasks in one shared place; no accounts or logins.
- **Context:** The intent requires two people to see and update the *same* list while explicitly excluding accounts/logins (INT-001 boundaries). This forced an architectural choice about how sharing happens without identity.
- **Options considered:** (1) Shared web app with a small server + shared storage (chosen); (2) browser-only storage (localStorage) with no server.
- **Excluded alternative:** Browser-only storage — excluded because each person's data would live in their own browser, so the two would NOT see the same list; it fails the core "shared" goal (REQ-002, REQ-004).
- **Rationale:** A minimal server-backed web app satisfies "shared" (both see the same tasks) while honouring "no logins". It is the smallest architecture that meets REQ-004.
- **Consequences:** Now — slightly more work than a static page (needs a server + storage + hosting). 3 months — the app must be deployed somewhere both people can reach; a small running service to maintain. 1 year — if usage grows or the list must survive forever, storage/backup decisions may need revisiting. Reversible: the UI is thin, so the storage backend can be swapped later.
- **Traces:** derives_from: [OQ-001, OQ-002]

<!-- Begin DEC entries below this line. Entries are appended chronologically. -->
