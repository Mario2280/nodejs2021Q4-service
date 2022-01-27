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
const taskPost = async (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  body.boardId = req.params.boardId;
  res.code(201).send(await postTask(body));
};
/**
 *
 * @param req Request including fields boardId and taskId and body realizing  {@link ITask}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const taskGet = async (req: CustomRequest, res: FastifyReply) => {
  const result = await getTask(req.params.taskId);
  if (!result) {
    res.code(404).send();
  } else {

    res.code(200).header('Content-type', 'application/json').send({
      title: result.title,
      description: result.description,
      order: result.order,
      userId: result.userId,
      boardId: result.boardId,
      id: result.id,
      columnId: result.columnId === '' ? null : result.columnId
    });
  }
};
/**
 *
 * @param req Default fastify request {@link FastifyRequest}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const taskGetAll = async (req: FastifyRequest, res: FastifyReply) => {
  res.send(await getTasks());
};
/**
 *
 * @param req Request including fields boardId and taskId and body realizing  {@link ITask}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const taskPut = async (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  res.send(await putTask(req.params.taskId, body));
};
/**
 *
 * @param req Request including fields boardId and taskId and body realizing  {@link ITask}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const taskDelete = async (req: CustomRequest, res: FastifyReply) => {
  const result = await deleteTask(req.params.taskId);
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
