import 'reflect-metadata';
import { getRepository } from "typeorm";
import { validate as isCorrectUuid } from "uuid";
import Board from '../../entity/Board';
import BoardConstructor, { IBoard } from '../models/BoardModel';

const getBoards = async (): Promise<Board[]> => {
  const result = await getRepository(Board).find();
  return result;
}

const getBoard = async (id: string): Promise<Board | number> => {
  if (isCorrectUuid(id)) {
    const result = await getRepository(Board).findOne(id);
    if (result instanceof Board) {
      return result;
    }
    return 404;
  }
  return 400;
  //return Error('Bad uuid');
}

const postBoard = async (board: IBoard): Promise<BoardConstructor> => {
  const newBoard = new BoardConstructor(board);
  await getRepository(Board)
    .createQueryBuilder("board")
    .insert()
    .into(Board)
    .values(newBoard)
    .execute();
  return newBoard;
}

const putBoard = async (board: IBoard): Promise<{ message: string}> => {
  if (Object.prototype.hasOwnProperty.call(board, 'title') ||
  Object.prototype.hasOwnProperty.call(board, 'columns')
  ) {
    await getRepository(Board)
      .createQueryBuilder("board")
      .update(Board)
      .set(board)
      .where('id = :id', { id: board.id })
      .execute();
    const result = await getRepository(Board)
      .createQueryBuilder("board")
      .where("id = :id", { id: board.id })
      .getOne();
    return {message: `Board ${result?.id} updated`};
  }
  return {message: 'Incorrect board'}
}

const deleteBoard = async (id: string): Promise<{ message: string }> => {
  if (isCorrectUuid(id)) {
    await getRepository(Board)
      .createQueryBuilder('board')
      .delete()
      .from(Board)
      .where("id = :id", { id })
      .execute();
    return { message: `Board ${id} deleted` };
  }
  return { message: 'Bad uuid' };
}

export { getBoards, getBoard, postBoard, putBoard, deleteBoard };
