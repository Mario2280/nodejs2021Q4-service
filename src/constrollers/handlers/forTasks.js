const {
  getTasks,
  getTask,
  postTask,
  putTask,
  deleteTask,
} = require('../../resources/services/task.memory.service');

const taskPost = (req, res) => {
  const { body } = req;
  body.boardId = req.params.boardId;
  res.code(201).send(postTask(body));
};

const taskGet = (req, res) => {
  const result = getTask(req.params.taskId);
  if (result.message) {
    res.code(404).send();
  } else {
    res.code(200).header('Content-type', 'application/json').send(result);
  }
};

const taskGetAll = (req, res) => {
  res.send(getTasks());
};

const taskPut = (req, res) => {
  const { body } = req;
  res.send(putTask(req.params.taskId, body));
};

const taskDelete = (req, res) => {
  const result = deleteTask(req.params.taskId);
  if (result.message) {
    res.code(200).send();
  } else {
    res.code(404).send(`Not Found`);
  }
};

module.exports = () => ({
  taskPost,
  taskGet,
  taskGetAll,
  taskPut,
  taskDelete,
});
