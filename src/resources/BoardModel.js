const uuid = require('uuid');

class Board {
    constructor(title, order, columns) {
        this.id = uuid.v4();
        this.title = title;
        this.order = order;
        if(columns){
            this.columns = columns;
        }
    }

    static toResponse(board) {
        const {id, title, order} = board;
        return {id, title, order};
    }
}


module.exports = Board;