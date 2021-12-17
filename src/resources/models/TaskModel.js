const uuid = require('uuid');

class Task {
  constructor(obj) {
    this.id = uuid.v4();
    this.title = obj.title;
    this.order = obj.order;
    this.description = obj.description;
    this.userId = obj.userId;
    this.columnId = obj.columnId;
    this.boardId = obj.boardId;
  }

  static toResponse(task) {
    const { title, order, description, userId, boardId, columnId, id } = task;
    return { title, order, description, userId, boardId, columnId, id };
  }
}

module.exports = Task;
