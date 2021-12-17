const uuid = require('uuid');

class Board {
    constructor(obj) {
        this.id = uuid.v4();
        this.title = obj.title;
        this.order = obj.order;
        if(obj.columns){
            this.columns = obj.columns;
        }
    }

    static toResponse(board) {
        const {id, title, order, columns} = board;
        return {id, title, order, columns};
    }
}


module.exports = Board;