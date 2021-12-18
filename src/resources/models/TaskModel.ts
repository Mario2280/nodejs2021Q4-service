import * as uuid from 'uuid';

interface ITask {
  id?:string,
  title:string,
  order:number,
  description:string,
  userId:string | null,
  columnId:string | null,
  boardId:string,
}

class Task {
  
  id:string;

  title:string;

  order:number;

  description:string;

  userId:string | null;

  columnId:string | null;

  boardId:string;
  
  constructor(obj: ITask) {
    this.id = uuid.v4();
    this.title = obj.title;
    this.order = obj.order;
    this.description = obj.description;
    this.userId = obj.userId;
    this.columnId = obj.columnId;
    this.boardId = obj.boardId;
  }

  static toResponse(task: ITask) : ITask{
    const { title, order, description, userId, boardId, columnId, id } = task;
    return { title, order, description, userId, boardId, columnId, id };
  }
}

export default Task;

export {ITask};