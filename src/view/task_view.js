const _ = require("underscore");
const $ = require("jquery");
const Backbone = require("backbone");

const TaskView = Backbone.View.extend({
  tagName: "li",
  initialize: function () {
    this.model.on("destroy", this.remove, this);
    this.model.on("change", this.render, this);
  },
  events: {
    "click .delete": "destroy",
    "click .toggle": "toggle",
  },
  destroy: function () {
    if (confirm("delete OK?")) {
      this.model.destroy();
      //ここでremove呼んでも同じ
      //this.$el.remove();
    }
  },
  remove: function () {
    this.$el.remove();
  },
  toggle: function () {
    this.model.set("completed", !this.model.get("completed"));
  },
  template: _.template($("#task-template").html()),
  render: function () {
    var template = this.template(this.model.toJSON());
    this.$el.html(template);
    return this;
  },
});

module.exports = TaskView;