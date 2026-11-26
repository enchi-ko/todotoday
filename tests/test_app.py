"""Tests for TODOTODAY — Goal 1: add a task and see it in the shared list.

Covers REQ-001 (add a task) and the shared-storage behaviour behind REQ-002
(both users see the same tasks).
"""

import os
import tempfile

import pytest

from app import create_app


@pytest.fixture
def client():
    fd, path = tempfile.mkstemp(suffix=".db")
    os.close(fd)
    try:
        app = create_app(db_path=path)
        app.config.update(TESTING=True)
        with app.test_client() as c:
            yield c
    finally:
        os.unlink(path)


def test_home_page_loads(client):
    resp = client.get("/")
    assert resp.status_code == 200
    assert b"TODOTODAY" in resp.data


def test_empty_list_shows_placeholder(client):
    resp = client.get("/")
    assert b"No tasks yet" in resp.data


def test_add_task_appears_in_list(client):
    # REQ-001 / REQ-002: a task I add shows up in the list.
    client.post("/add", data={"title": "Buy milk"}, follow_redirects=True)
    resp = client.get("/")
    assert b"Buy milk" in resp.data


def test_empty_title_is_not_added(client):
    # REQ-001 criterion 2: an empty title adds nothing.
    client.post("/add", data={"title": "   "}, follow_redirects=True)
    resp = client.get("/")
    assert b"No tasks yet" in resp.data


def test_tasks_are_shared_across_sessions(client):
    # REQ-002 / REQ-004: tasks live in one shared place, not per-browser.
    # Two independent clients against the same server see the same tasks.
    other = client.application.test_client()
    client.post("/add", data={"title": "Shared task"}, follow_redirects=True)
    resp = other.get("/")
    assert b"Shared task" in resp.data
