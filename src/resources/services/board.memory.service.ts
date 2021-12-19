import Board, { IBoard } from '../models/BoardModel';
import { filterTasks } from './task.memory.service';

const Boards: Array<Board> = [];

const getBoards = () => Boards;

const getBoard = (id: string) => {
  const res = Boards.find((val) => val.id === id);
  if (res) {
    return Board.toResponse(res);
  }
  return 404;
};

const postBoard = (boardObj: IBoard) => {
  const res = new Board(boardObj);
  Boards.push(res);
  return Board.toResponse(res);
};

const putBoard = (boardObj: IBoard) => {
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

const deleteBoard = (id: string) => {
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
