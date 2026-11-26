/*
 * TODOTODAY — task logic (personal, browser-only).
 *
 * Pure functions over a plain array of tasks: { id, title, done }.
 * No DOM, no storage here — so it can be tested in Node and reused in the page.
 *
 * UMD-ish wrapper: `module.exports` in Node, `window.Todo` in the browser.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.Todo = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var STORAGE_KEY = "todotoday.tasks";

  function clean(title) {
    return String(title == null ? "" : title).trim();
  }

  function nextId(tasks) {
    var max = 0;
    for (var i = 0; i < tasks.length; i++) {
      var id = tasks[i] && tasks[i].id;
      if (typeof id === "number" && id > max) max = id;
    }
    return max + 1;
  }

  function addTask(tasks, title) {
    var t = clean(title);
    if (!t) return tasks;
    var next = tasks.slice();
    next.push({ id: nextId(tasks), title: t, done: false });
    return next;
  }

  function toggleTask(tasks, id) {
    return tasks.map(function (t) {
      return t.id === id ? { id: t.id, title: t.title, done: !t.done } : t;
    });
  }

  function editTask(tasks, id, title) {
    var t = clean(title);
    if (!t) return tasks;
    return tasks.map(function (x) {
      return x.id === id ? { id: x.id, title: t, done: x.done } : x;
    });
  }

  function deleteTask(tasks, id) {
    return tasks.filter(function (x) {
      return x.id !== id;
    });
  }

  function load(storage) {
    try {
      var raw = storage.getItem(STORAGE_KEY);
      var data = raw ? JSON.parse(raw) : [];
      return Array.isArray(data) ? data : [];
    } catch (e) {
      return [];
    }
  }

  function save(storage, tasks) {
    storage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  /** Serialize tasks to a pretty JSON string (for a backup file). */
  function exportTasks(tasks) {
    return JSON.stringify(tasks, null, 2);
  }

  /**
   * Parse a backup file's text into a task list.
   * Throws if the text is not valid JSON or not a list of usable tasks.
   */
  function importTasks(text) {
    var data = JSON.parse(text);
    if (!Array.isArray(data)) {
      throw new Error("not a task list");
    }
    var out = [];
    for (var i = 0; i < data.length; i++) {
      var t = data[i];
      if (!t || typeof t !== "object") {
        throw new Error("invalid task");
      }
      var title = clean(t.title);
      if (!title) {
        throw new Error("task with an empty title");
      }
      out.push({
        id: typeof t.id === "number" ? t.id : nextId(out),
        title: title,
        done: t.done === true,
      });
    }
    return out;
  }

  return {
    STORAGE_KEY: STORAGE_KEY,
    addTask: addTask,
    toggleTask: toggleTask,
    editTask: editTask,
    deleteTask: deleteTask,
    nextId: nextId,
    load: load,
    save: save,
    exportTasks: exportTasks,
    importTasks: importTasks,
  };
});
