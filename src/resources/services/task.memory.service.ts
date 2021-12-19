import Task, { ITask } from '../models/TaskModel';

let Tasks: Array<Task> = [];

const filterTasks = (id: string, byUser?: boolean) => {
  if (byUser) {
    for (let i = 0; i < Tasks.length; i += 1) {
      if (Tasks[i].userId === id) {
        Tasks[i].userId = null;
      }
    }
  } else {
    Tasks = Tasks.filter((value) => value.boardId !== id);
  }
};

const getTasks = () => Tasks;

const getTask = (id: string): ITask | void => {
  const res = Tasks.find((val) => val.id === id);
  if (res) {
    return Task.toResponse(res);
  }
  return;
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

const deleteTask = (id: string): void | ITask => {
  const res = Tasks.findIndex((value) => value.id === id);
  if (res !== -1) {
    const returnMsg = Tasks[res];
    Tasks.splice(res, 1);
    return returnMsg;
  }
  return;
};

export { Tasks, filterTasks, getTasks, getTask, postTask, putTask, deleteTask };
