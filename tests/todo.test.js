"use strict";

const test = require("node:test");
const assert = require("node:assert");
const Todo = require("../todo.js");

/** Minimal in-memory stand-in for the browser's localStorage. */
function fakeStorage() {
  const data = {};
  return {
    getItem: (k) => (k in data ? data[k] : null),
    setItem: (k, v) => {
      data[k] = String(v);
    },
  };
}

test("add a task (REQ-006)", () => {
  const tasks = Todo.addTask([], "buy milk");
  assert.equal(tasks.length, 1);
  assert.equal(tasks[0].title, "buy milk");
  assert.equal(tasks[0].done, false);
});

test("an empty title is not added (REQ-006)", () => {
  assert.deepEqual(Todo.addTask([], "   "), []);
  assert.deepEqual(Todo.addTask([], ""), []);
});

test("view: tasks are returned in order (REQ-007)", () => {
  let tasks = Todo.addTask([], "first");
  tasks = Todo.addTask(tasks, "second");
  assert.deepEqual(
    tasks.map((t) => t.title),
    ["first", "second"]
  );
});

test("mark done and undo (REQ-008)", () => {
  let tasks = Todo.addTask([], "walk dog");
  const id = tasks[0].id;
  tasks = Todo.toggleTask(tasks, id);
  assert.equal(tasks[0].done, true);
  tasks = Todo.toggleTask(tasks, id);
  assert.equal(tasks[0].done, false);
});

test("edit a task title (REQ-009)", () => {
  let tasks = Todo.addTask([], "buy milk");
  tasks = Todo.editTask(tasks, tasks[0].id, "buy oat milk");
  assert.equal(tasks[0].title, "buy oat milk");
});

test("an empty edit keeps the previous title (REQ-009)", () => {
  let tasks = Todo.addTask([], "buy milk");
  tasks = Todo.editTask(tasks, tasks[0].id, "   ");
  assert.equal(tasks[0].title, "buy milk");
});

test("delete a task (REQ-009)", () => {
  let tasks = Todo.addTask([], "buy milk");
  tasks = Todo.addTask(tasks, "walk dog");
  tasks = Todo.deleteTask(tasks, tasks[0].id);
  assert.equal(tasks.length, 1);
  assert.equal(tasks[0].title, "walk dog");
});

test("tasks are saved and reloaded (REQ-010)", () => {
  const storage = fakeStorage();
  let tasks = Todo.addTask([], "buy milk");
  tasks = Todo.toggleTask(tasks, tasks[0].id);
  Todo.save(storage, tasks);
  assert.deepEqual(Todo.load(storage), tasks);
});

test("load returns an empty list when nothing is saved (REQ-010)", () => {
  assert.deepEqual(Todo.load(fakeStorage()), []);
});

test("load recovers from corrupt saved data (REQ-010)", () => {
  const storage = fakeStorage();
  storage.setItem(Todo.STORAGE_KEY, "{not json");
  assert.deepEqual(Todo.load(storage), []);
});

test("export produces JSON containing the tasks (REQ-011)", () => {
  const tasks = Todo.addTask([], "buy milk");
  assert.deepEqual(JSON.parse(Todo.exportTasks(tasks)), tasks);
});

test("export of an empty list is valid JSON (REQ-011)", () => {
  assert.equal(Todo.exportTasks([]), "[]");
});

test("import restores tasks from exported text (REQ-012)", () => {
  let tasks = Todo.addTask([], "buy milk");
  tasks = Todo.toggleTask(tasks, tasks[0].id);
  assert.deepEqual(Todo.importTasks(Todo.exportTasks(tasks)), tasks);
});

test("import rejects text that is not JSON (REQ-012)", () => {
  assert.throws(() => Todo.importTasks("{not json"));
});

test("import rejects a JSON value that is not a list (REQ-012)", () => {
  assert.throws(() => Todo.importTasks('{"a":1}'));
});

test("import rejects a task with an empty title (REQ-012)", () => {
  assert.throws(() => Todo.importTasks('[{"title":"   "}]'));
});

test("import normalises missing fields (REQ-012)", () => {
  const restored = Todo.importTasks('[{"title":"buy milk"}]');
  assert.equal(restored.length, 1);
  assert.equal(restored[0].title, "buy milk");
  assert.equal(restored[0].done, false);
  assert.equal(typeof restored[0].id, "number");
});
