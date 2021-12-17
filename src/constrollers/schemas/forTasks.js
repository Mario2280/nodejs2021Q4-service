const str = { type: 'string' };
const num = { type: 'number' };

const task = {
  type: 'object',
  // required: ['title', 'order', 'description', 'userId', 'boardId', 'columnId'],
  properties: {
    title: str,
    order: num,
    description: str,
    userId: str,
    boardId: str,
    columnId: str,
  },
};

const getTasksSchema = {
  // response: {
  //     200: {
  //         type: 'array',
  //         items: task
  //     }
  // }
};

const getTaskSchema = {
  params: {
    taskId: str,
  },
};

const postTaskSchema = {
  body: {
    task,
  },
};

const putTaskSchema = {
  body: task,
  params: {
    taskId: str,
  },
};

const deleteTaskSchema = {
  params: {
    taskId: str,
  },
};

module.exports = () => ({
  getTasksSchema,
  getTaskSchema,
  postTaskSchema,
  putTaskSchema,
  deleteTaskSchema,
});
