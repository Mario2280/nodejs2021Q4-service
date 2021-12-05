const uuid = require('uuid');

class Task {
    constructor(title, order, description, userId, boardId, columnId) {
        this.id = uuid.v4();
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.columnId = columnId;
        this.boardId = boardId;
    }

    static toResponse(task) {
        const {title, order, description, userId, boardId, columnId, id} = task;
        return {title, order, description, userId, boardId, columnId, id};
    }
}


module.exports = Task;