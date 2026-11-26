"""TODOTODAY — a minimal shared to-do list for two people.

A small web app: one page both users open, backed by a server that keeps the
tasks in one shared place (a SQLite database). No accounts, no logins.

This module exposes `create_app()` so tests can spin up an isolated instance
against a temporary database.
"""

from __future__ import annotations

import os
import sqlite3

from flask import Flask, g, redirect, render_template, request, url_for

DEFAULT_DB = os.path.join(os.path.dirname(os.path.abspath(__file__)), "tasks.db")


def create_app(db_path: str | None = None) -> Flask:
    """Create the TODOTODAY Flask application.

    Args:
        db_path: path to the SQLite file. Defaults to $TODOTODAY_DB or tasks.db
            next to this file. Tests pass a temporary path for isolation.
    """
    app = Flask(__name__)
    app.config["DB_PATH"] = db_path or os.environ.get("TODOTODAY_DB", DEFAULT_DB)

    def get_db() -> sqlite3.Connection:
        if "db" not in g:
            g.db = sqlite3.connect(app.config["DB_PATH"])
            g.db.row_factory = sqlite3.Row
        return g.db

    @app.teardown_appcontext
    def close_db(exc: BaseException | None = None) -> None:
        db = g.pop("db", None)
        if db is not None:
            db.close()

    def init_db() -> None:
        db = sqlite3.connect(app.config["DB_PATH"])
        db.execute(
            "CREATE TABLE IF NOT EXISTS tasks ("
            "id INTEGER PRIMARY KEY AUTOINCREMENT, "
            "title TEXT NOT NULL, "
            "done INTEGER NOT NULL DEFAULT 0)"
        )
        db.commit()
        db.close()

    init_db()

    @app.route("/")
    def index():
        db = get_db()
        tasks = db.execute(
            "SELECT id, title, done FROM tasks ORDER BY id"
        ).fetchall()
        return render_template("index.html", tasks=tasks)

    @app.route("/add", methods=["POST"])
    def add():
        title = (request.form.get("title") or "").strip()
        if title:
            db = get_db()
            db.execute("INSERT INTO tasks (title, done) VALUES (?, 0)", (title,))
            db.commit()
        return redirect(url_for("index"))

    return app


app = create_app()

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
