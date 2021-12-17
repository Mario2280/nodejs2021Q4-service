const boardHandler = require('../constrollers/handlers/forBoards');

const boardSchema = require('../constrollers/schemas/forBoards');

const getBoardsOpt = {
  handler: boardHandler().boardGetAll,
};

const getBoardOpt = {
  schema: boardSchema().getBoardSchema,
  handler: boardHandler().boardGet,
};

const postBoardOpt = {
  schema: boardSchema().postBoardSchema,
  handler: boardHandler().boardPost,
};

const putBoardOpt = {
  schema: boardSchema().putBoardSchema,
  handler: boardHandler().boardPut,
};

const deleteBoardOpt = {
  schema: boardSchema().deleteBoardSchema,
  handler: boardHandler().boardDelete,
};

module.exports = {
  getBoardsOpt,
  getBoardOpt,
  postBoardOpt,
  putBoardOpt,
  deleteBoardOpt,
};
