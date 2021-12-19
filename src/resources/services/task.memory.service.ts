import Task, { ITask } from '../models/TaskModel';

const Tasks: Array<Task> = [];

const filterTasks = (id: string, byUser?: boolean) => {
  if (byUser) {
    for (let i = 0; i < Tasks.length; i += 1) {
      if (Tasks[i].userId === id) {
        Tasks[i].userId = null;
      }
    }
  } else {
    for (let i = 0; i < Tasks.length; i += 1) {
      if (Tasks[i].boardId === id) {
        Tasks.splice(i, 1);
        i -= 1;
      }
    }
  }
};

const getTasks = () => Tasks;

const getTask = (id: string): ITask | null => {
  const res = Tasks.find((val) => val.id === id);
  if (res) {
    return Task.toResponse(res);
  }
  return null;
};

const postTask = (taskObj: ITask) => {
  const newTask = new Task(taskObj);
  Tasks.push(newTask);
  return newTask;
};

const putTask = (id: string, taskObj: ITask) => {
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

const deleteTask = (id: string): null | ITask => {
  const res = Tasks.findIndex((value) => value.id === id);
  if (res !== -1) {
    const returnMsg = Tasks[res];
    Tasks.splice(res, 1);
    return returnMsg;
  }
  return null;
};

export { Tasks, filterTasks, getTasks, getTask, postTask, putTask, deleteTask };
