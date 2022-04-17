const _ = require("underscore");
const $ = require("jquery");
const Backbone = require("backbone");

const Task = Backbone.Model.extend({
  defaults: {
    title: "task",
    completed: false,
  },
  validate: function (attrs) {
    if (_.isEmpty(attrs.title)) {
      return "error title is empty";
    }
  },
  initialize: function () {
    this.on("invalid", function (model, error) {
      $("#err").html(error);
    });
  },
});

module.exports = Task;