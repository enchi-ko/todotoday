# TODOTODAY

A minimal **shared to-do list for two people**. One web page you both open;
tasks live in one shared place, so you see the same list. No accounts, no logins.

## What it does

- **Add a task** — type a short title and it appears in the list.
- **See the shared list** — both people open the same page and see the same tasks.
- **Mark a task done** — click the circle to check it off (click again to undo).
- **Edit or remove a task** — fix a title, or delete a task you no longer need.

## Run it

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python app.py
```

Then open <http://127.0.0.1:5000> in your browser.

## Share it with the other person

By default the app listens on `127.0.0.1` (only your machine). To let the other
person reach it on your local network:

```bash
TODOTODAY_HOST=0.0.0.0 .venv/bin/python app.py
```

Then share your machine's local address, e.g. `http://192.168.1.20:5000`.

> There are no accounts — anyone who can reach the address can see and edit the
> list. Keep it on a trusted network, or host it behind a private link.

Settings (environment variables):

| Variable | Default | Meaning |
|----------|---------|---------|
| `TODOTODAY_HOST` | `127.0.0.1` | Address to listen on (`0.0.0.0` = your whole network) |
| `TODOTODAY_PORT` | `5000` | Port |
| `TODOTODAY_DB` | `tasks.db` | Where the shared tasks are stored |

## Tests

```bash
.venv/bin/python -m pytest -q
```

## How it's built

A small [Flask](https://flask.palletsprojects.com/) app backed by SQLite — the
simplest thing that satisfies "shared, but no logins".
