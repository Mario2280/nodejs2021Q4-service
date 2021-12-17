const user = require('./userRouter');

const task = require('./taskRouter');

const board = require('./boardRouter');

const Routes = (fastify, opts, done) => {
  fastify.get('/users', user.getUsersOpt);

  fastify.get('/users/:userId', user.getUserOpt);

  fastify.post('/users', user.postUserOpt);

  fastify.put('/users/:userId', user.putUserOpt);

  fastify.delete('/users/:userId', user.deleteUserOpt);

  fastify.get('/boards', board.getBoardsOpt);

  fastify.get('/boards/:boardId', board.getBoardOpt);

  fastify.post('/boards', board.postBoardOpt);

  fastify.put('/boards/:boardId', board.putBoardOpt);

  fastify.delete('/boards/:boardId', board.deleteBoardOpt);

  fastify.get('/boards/:boardId/tasks', task.getTasksOpt);

  fastify.get('/boards/:boardId/tasks/:taskId', task.getTaskOpt);

  fastify.post('/boards/:boardId/tasks', task.postTaskOpt);

  fastify.put('/boards/:boardId/tasks/:taskId', task.putTaskOpt);

  fastify.delete('/boards/:boardId/tasks/:taskId', task.deleteTaskOpt);

  done();
};

module.exports = Routes;
