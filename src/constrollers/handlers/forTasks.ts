import { FastifyRequest, FastifyReply } from 'fastify';
import {
  getTasks,
  getTask,
  postTask,
  putTask,
  deleteTask,
} from '../../resources/services/task.memory.service';
import { ITask } from '../../resources/models/TaskModel';

type CustomRequest = FastifyRequest<{
  Params: {
    boardId: string;
    taskId: string;
  };
  Body: ITask;
}>;

/**
 *
 * @param req Request including fields boardId and taskId and body realizing  {@link ITask}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const taskPost = (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  body.boardId = req.params.boardId;
  res.code(201).send(postTask(body));
};
/**
 *
 * @param req Request including fields boardId and taskId and body realizing  {@link ITask}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const taskGet = (req: CustomRequest, res: FastifyReply) => {
  const result = getTask(req.params.taskId);
  if (!result) {
    res.code(404).send();
  } else {
    res.code(200).header('Content-type', 'application/json').send(result);
  }
};
/**
 *
 * @param req Default fastify request {@link FastifyRequest}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const taskGetAll = (req: FastifyRequest, res: FastifyReply) => {
  res.send(getTasks());
};
/**
 *
 * @param req Request including fields boardId and taskId and body realizing  {@link ITask}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const taskPut = (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  res.send(putTask(req.params.taskId, body));
};
/**
 *
 * @param req Request including fields boardId and taskId and body realizing  {@link ITask}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const taskDelete = (req: CustomRequest, res: FastifyReply) => {
  const result = deleteTask(req.params.taskId);
  if (result) {
    res.code(200).send(result);
  } else {
    res.code(404).send(`Not Found`);
  }
};

export = () => ({
  taskPost,
  taskGet,
  taskGetAll,
  taskPut,
  taskDelete,
});
