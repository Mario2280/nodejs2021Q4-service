const Task = require('../models/TaskModel');

let Tasks = [];

const filterTasks = (id) => {
  Tasks = Tasks.filter((value) => value.boardId !== id);
};

const getTasks = () => Tasks;

const getTask = (id) => {
  const res = Tasks.find((val) => val.id === id);
  if (res) {
    return Task.toResponse(res);
  }
  return { message: 'Task not found' };
};

const postTask = (taskObj) => {
  const newTask = new Task(taskObj);
  Tasks.push(newTask);
  return newTask;
};

const putTask = (id, taskObj) => {
  const res = Tasks.findIndex((value) => value.id === id);
  if (res !== -1) {
    Tasks[res].title = taskObj.title;
    Tasks[res].order = taskObj.order;
    Tasks[res].description = taskObj.description;
    if (!taskObj.userId) {
      Tasks[res].userId = null;
    } else {
      Tasks[res].userId = taskObj.userId;
    }
    Tasks[res].boardId = taskObj.boardId;
    if (!taskObj.userId) {
      Tasks[res].columnId = null;
    } else {
      Tasks[res].columnId = taskObj.columnId;
    }

    return { message: `Task ${Tasks[res].id}updated` };
  }
  return { message: 'Task not found' };
};

const deleteTask = (id) => {
  const res = Tasks.findIndex((value) => value.id === id);
  if (res !== -1) {
    Tasks.splice(res, 1);
    return { message: `Task ${id} deleted` };
  }
  return -1;
};
module.exports = {
  Tasks,
  filterTasks,
  getTasks,
  getTask,
  postTask,
  putTask,
  deleteTask,
};
