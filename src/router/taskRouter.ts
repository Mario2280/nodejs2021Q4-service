import taskHandler from '../constrollers/handlers/forTasks';
import taskSchema from '../constrollers/schemas/forTasks';

const getTasksOpt = {
  schema: taskSchema().getTasksSchema,
  handler: taskHandler().taskGetAll,
};

const getTaskOpt = {
  schema: taskSchema().getTaskSchema,
  handler: taskHandler().taskGet,
};

const postTaskOpt = {
  schema: taskSchema().postTaskSchema,
  handler: taskHandler().taskPost,
};

const putTaskOpt = {
  schema: taskSchema().putTaskSchema,
  handler: taskHandler().taskPut,
};

const deleteTaskOpt = {
  schema: taskSchema().deleteTaskSchema,
  handler: taskHandler().taskDelete,
};

export = () => ({ 
  getTasksOpt,
  getTaskOpt,
  postTaskOpt,
  putTaskOpt,
  deleteTaskOpt,
})