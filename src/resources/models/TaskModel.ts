interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  columnId: string;
  boardId: string;
}

class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId?: string;

  columnId?: string;

  boardId?: string;

  constructor(obj: ITask) {
    this.title = obj.title;
    this.order = obj.order;
    this.description = obj.description;
    if(Object.hasOwnProperty.call(obj, 'userId')){
      this.userId = obj.userId;
    }
    if(Object.hasOwnProperty.call(obj, 'columnId')){
      this.columnId = obj.columnId;
    }
    if(Object.hasOwnProperty.call(obj, 'boardId')){
      this.boardId = obj.boardId;
    }
  }

  /**
   *
   * @description This method was conceived to remove secret fields from an object
   * @param board {@link ITask} object
   * @returns -> {@link ITask} object
   */
  static toResponse(task: ITask): ITask {
    const { title, order, description, userId, boardId, columnId, id } = task;
    return { title, order, description, userId, boardId, columnId, id };
  }
}

export default Task;

export { ITask };
