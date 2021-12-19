const str = { type: 'string' };
const num = { type: 'number' };
const Column = {
  type: 'object',
  properties: {
    title: str,
    order: num,
  },
};
const board = {
  type: 'object',
  required: ['title'],
  properties: {
    title: str,
    columns: { type: 'array', items: Column },
    id: str,
    password: str,
  },
};

const getBoardsSchema = {
};

const getBoardSchema = {
  params: {
    boardId: str,
  },
};

const postBoardSchema = {
  body: {
    board,
  },
};

const putBoardSchema = {
  body: board,
  params: {
    boardId: str,
  },
};

const deleteBoardSchema = {
  params: {
    boardId: str,
  },
};

export = () => ({
  getBoardsSchema,
  getBoardSchema,
  postBoardSchema,
  putBoardSchema,
  deleteBoardSchema,
});
