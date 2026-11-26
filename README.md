# TODOTODAY

A **personal to-do list** that runs entirely in your browser. No server, no
install, no accounts — just open the page.

## What it does

- **Add a task** — type a short title and it appears in the list.
- **See your list** — open the page and see all your tasks.
- **Mark a task done** — click the circle to check it off (click again to undo).
- **Edit or remove a task** — type over a task's text to fix it, or click ✕ to delete.
- **Saved in your browser** — your list (and what's done) is still there next time.

## Use it

Open **`index.html`** in your browser (double-click it). That's it.

> Your tasks are saved in this browser, on this device. They don't sync to other
> devices, and clearing your browser's data would clear the list.

## Tests

```bash
npm test
```

(Requires [Node.js](https://nodejs.org/). The task logic lives in `todo.js` and
is tested without a browser.)

## How it's built

- `index.html` — the page (markup + the small bit of glue that renders and saves)
- `todo.js` — the task logic (add / toggle / edit / delete / save / load), pure and testable
- `style.css` — the look
- `tests/todo.test.js` — the checks
