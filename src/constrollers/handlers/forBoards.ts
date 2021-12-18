
import {FastifyRequest, FastifyReply} from 'fastify';
import { getBoards, getBoard, postBoard, putBoard, deleteBoard } from '../../resources/services/board.memory.service'
import {IBoard} from '../../resources/models/BoardModel'

type CustomRequest = FastifyRequest<{
  Params: {
    boardId: string
  },
  Body: IBoard,
}>

const boardPost = (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  res
    .code(201)
    .header('Content-Type', 'application/json')
    .send(postBoard(body));
};

const boardGet = (req: CustomRequest, res: FastifyReply) => {
  res.header('Content-Type', 'application/json');
  const result = getBoard(req.params.boardId);
  if (result === 404) {
    res.code(404).send();
  } else {
    res.send(result);
  }
};

const boardGetAll = (req: FastifyRequest, res: FastifyReply) => {
  res.send(getBoards());
};

const boardPut = (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  res.send(putBoard(body));
};

const boardDelete = (req: CustomRequest, res: FastifyReply) => {
  res.send(deleteBoard(req.params.boardId));
};


export = () => ({
  boardPost,
  boardGet,
  boardGetAll,
  boardPut,
  boardDelete
})
