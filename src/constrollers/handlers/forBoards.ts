import { FastifyRequest, FastifyReply } from 'fastify';
import {
  getBoards,
  getBoard,
  postBoard,
  
  deleteBoard,
} from '../../resources/services/board.memory.service';
import { IBoard } from '../../resources/models/BoardModel';

type CustomRequest = FastifyRequest<{
  Params: {
    boardId: string;
  };
  Body: IBoard;
}>;
/**
 *
 * @param req Request including fields boardId and body realizing  {@link IBoard}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const boardPost = (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  res
    .code(201)
    .header('Content-Type', 'application/json')
    .send(postBoard(body));
};
/**
 *
 * @param req Request including fields boardId and body realizing  {@link IBoard}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const boardGet = async (req: CustomRequest, res: FastifyReply) => {
  res.header('Content-Type', 'application/json');
  const result = await getBoard(req.params.boardId);
  // if (result === 404) {
  //   res.code(404).send();
  // } else {
  //   res.send(result);
  // }
  res.code(404).send();
};
/**
 *
 * @param req Default fastify request {@link FastifyRequest}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const boardGetAll = async (req: FastifyRequest, res: FastifyReply) => {
  const result = await getBoards();
  res.send(result);
};
/**
 *
 * @param req Request including fields boardId and body realizing  {@link IBoard}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const boardPut = (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  //res.send(putBoard(body));
};
/**
 *
 * @param req Request including fields boardId and body realizing  {@link IBoard}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const boardDelete = (req: CustomRequest, res: FastifyReply) => {
  res.send(deleteBoard(req.params.boardId));
};

export = () => ({
  boardPost,
  boardGet,
  boardGetAll,
  boardPut,
  boardDelete,
});
