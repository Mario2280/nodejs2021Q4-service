import * as uuid from 'uuid';

interface IColum {
  title: string;
  order: number;
}

interface IBoard {
  id: string;
  title: string;
  order: number;
  columns?: Array<IColum>;
}

class Board {
  id: string;

  title: string;

  order: number;

  columns: Array<IColum> | undefined;

  constructor(obj: IBoard) {
    this.id = uuid.v4();
    this.title = obj.title;
    this.order = obj.order;
    if (obj.columns) {
      this.columns = obj.columns;
    }
  }

  /**
   *
   * @description This method was conceived to remove secret fields from an object
   * @param board {@link IBoard} object
   * @returns -> {@link IBoard} object
   */
  static toResponse(board: IBoard): IBoard {
    const { id, title, order, columns } = board;
    return { id, title, order, columns };
  }
}

export default Board;
export { IBoard };
