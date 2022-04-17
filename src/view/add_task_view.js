const _ = require("underscore");
const $ = require("jquery");
const Backbone = require("backbone");

const Task = require("../model/task");

const AddTaskView = Backbone.View.extend({
  el: "#addtask",
  events: {
    submit: "submit",
  },
  submit: function (e) {
    e.preventDefault();
    var task = new Task();
    if (task.set({ title: $("#title").val() }, { validate: true })) {
      this.collection.add(task);
      $("#title").val("");
      $("#err").html("");
    }
  },
});

module.exports = AddTaskView;
