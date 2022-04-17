const $ = require("jquery");

const Tasks = require("./collection/tasks");
const TasksView = require("./view/tasks_view");
const AddTaskView = require("./view/add_task_view");

const tasks = new Tasks([
  {
    title: "taskA",
    completed: true,
  },
  {
    title: "taskB",
  },
  {
    title: "taskC",
  },
  {
    title: "taskD",
  },
]);

const tasksView = new TasksView({ collection: tasks });
const addtaskView = new AddTaskView({ collection: tasks });
$("#tasks").html(tasksView.render().el);