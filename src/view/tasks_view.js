const _ = require("underscore");
const $ = require("jquery");
const Backbone = require("backbone");

const TaskView = require("../view/task_view");

const TasksView = Backbone.View.extend({
  tagName: "ul",
  initialize: function () {
    this.collection.on("add", this.addNew, this);
    this.collection.on("change", this.updateCount, this);
    this.collection.on("destroy", this.updateCount, this);
  },
  addNew: function (task) {
    var taskView = new TaskView({ model: task });
    this.$el.append(taskView.render().el);
    this.updateCount();
  },
  updateCount: function () {
    var uncompleteedTask = this.collection.filter(function (task) {
      return !task.get("completed");
    });
    $("#count").html(uncompleteedTask.length);
  },
  render: function () {
    this.$el.empty();
    this.collection.each(function (task) {
      var taskView = new TaskView({ model: task });
      this.$el.append(taskView.render().el);
    }, this);

    this.updateCount();
    return this;
  },
});

module.exports = TasksView;