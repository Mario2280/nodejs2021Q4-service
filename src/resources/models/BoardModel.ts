import * as uuid from 'uuid';

interface IColum {
  id:string,
  title: string;
  order: number;
}

interface IBoard {
  id: string;
  title: string;
  order: number;
  columns?: IColum[];
}

class Board {
  id: string;

  title: string;


  columns: Array<IColum> | undefined;

  constructor(obj: IBoard) {
    this.id = uuid.v4();
    this.title = obj.title;
  }

  /**
   *
   * @description This method was conceived to remove secret fields from an object
   * @param board {@link IBoard} object
   * @returns -> {@link IBoard} object
   */
  static toResponse(board: IBoard): IBoard {
    const { id, title, order } = board;
    return { id, title, order};
  }
}

export default Board;
export { IBoard };
