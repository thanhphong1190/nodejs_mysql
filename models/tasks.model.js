var db = require("../db");

var tasks = {
  getAllTasks: function(callback) {
    return db.query("Select * from tasks", callback);
  },
  getTasksById: function(id, callback) {
    return db.query("select * from tasks where Id=?", [id], callback);
  },
  addSV: function(tasks, callback) {
    return db.query(
      "Insert into tasks(name,date,point) values(?,?,?)",
      [tasks.name, tasks.date, tasks.point],
      callback
    );
  },
  deleteSV: function(id, callback) {
    return db.query("delete from tasks where Id=?", [id], callback);
  },
  updateSV: function(id, tasks, callback) {
    return db.query(
      "update tasks set name=?,date=?,point=? where Id=?",
      [tasks.name, tasks.date, tasks.point, id],
      callback
    );
  }
};
module.exports = tasks;
