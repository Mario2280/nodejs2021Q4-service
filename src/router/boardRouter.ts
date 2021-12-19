import boardHandler from '../constrollers/handlers/forBoards';

import boardSchema from '../constrollers/schemas/forBoards';

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

export = () => ({
  getBoardsOpt,
  getBoardOpt,
  postBoardOpt,
  putBoardOpt,
  deleteBoardOpt,
});
