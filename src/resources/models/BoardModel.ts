interface IColum {
  title: string;
  order: number;
}

interface IBoard {
  id?: string;
  title: string;
  order: number;
  columns?: IColum[];
}

class Board {

  title: string;


  columns: Array<IColum> | undefined;

  constructor(obj: IBoard) {
    this.title = obj.title;
    this.columns = obj.columns;
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
