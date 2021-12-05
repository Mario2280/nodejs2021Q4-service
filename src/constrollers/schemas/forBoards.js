const str = {type: 'string'};
const num = {type: 'number'};
const Column = {
    type: 'object',
    properties: {
        title: str,
        order: str,
    }
};
const board = {
    type: 'object',
    required: ['title'],
    properties: {
        title: str,
        columns: {type: 'array', items: Column},
        password: str
    }
};

const getBoardsSchema = {
    response: {
        200: {
            type: 'array',
            items: board
        }
    }
};

const getBoardSchema = {
    params: {
        boardId: num,
    },
    response: {
        200: board
    }
};

const postBoardSchema = {
    body: {
        board
    },
    response: {
        200: str,
    }
};

const putBoardSchema = {
    body: board,
    params: {
        boardId: num,
    },
    response: {
        200: str
    }
};

const deleteBoardSchema = {
    params: {
        boardId: str
    },
    response: {
        200: str,
    }
};

module.exports = () => ({getBoardsSchema, getBoardSchema, postBoardSchema, putBoardSchema, deleteBoardSchema});
