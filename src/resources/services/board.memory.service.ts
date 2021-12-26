import Board, { IBoard } from '../models/BoardModel';
import { filterTasks } from './task.memory.service';

const Boards: Array<Board> = [];

const getBoards = () => Boards;

/**
 *
 * @param id Id requested board
 * @returns return {@link IBoard} obj or number, when board not found
 */
const getBoard = (id: string): IBoard | number => {
  const res = Boards.find((val) => val.id === id);
  if (res) {
    return Board.toResponse(res);
  }
  return 404;
};

/**
 *
 * @param boardObj {@link IBoard} obj without id
 * @returns return {@link IBoard} obj
 */
const postBoard = (boardObj: IBoard) => {
  const res = new Board(boardObj);
  Boards.push(res);
  return Board.toResponse(res);
};

/**
 *
 * @param boardObj {@link IBoard}
 * @returns message success or error
 */
const putBoard = (boardObj: IBoard): { message: string } => {
  const { title, order, columns, id } = boardObj;
  const res = Boards.findIndex((value) => value.id === id);
  if (res >= 0) {
    Boards[res].title = title;
    Boards[res].order = order;
    Boards[res].columns = columns;
    return {
      message: `Board ${Boards[res].id}updated`,
    };
  }
  return {
    message: 'Board not found',
  };
};

/**
 *
 * @param id Id of the board which we want to delete
 * @returns message success or error
 */
const deleteBoard = (id: string): { message: string } => {
  const res = Boards.findIndex((value) => value.id === id);
  if (res !== -1) {
    filterTasks(id);
    Boards.splice(res, 1);
    return {
      message: `Board ${id} deleted`,
    };
  }
  return {
    message: 'Board not found',
  };
};

export { getBoards, getBoard, postBoard, putBoard, deleteBoard };
