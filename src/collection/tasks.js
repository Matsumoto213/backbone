const Backbone = require("backbone");
const Task = require("../model/task");

const Tasks = Backbone.Collection.extend({ model: Task });

module.exports = Tasks;