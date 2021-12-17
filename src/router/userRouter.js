const userHandler = require('../constrollers/handlers/forUsers');
const userSchema = require('../constrollers/schemas/forUsers');

const getUsersOpt = {
  schema: userSchema().getUsersSchema,
  handler: userHandler().userGetAll,
};

const getUserOpt = {
  schema: userSchema().getUserSchema,
  handler: userHandler().userGet,
};

const postUserOpt = {
  schema: userSchema().postUserSchema,
  handler: userHandler().userPost,
};

const putUserOpt = {
  schema: userSchema().putUserSchema,
  handler: userHandler().userPut,
};

const deleteUserOpt = {
  schema: userSchema().deleteUserSchema,
  handler: userHandler().userDelete,
};

module.exports = {
  getUsersOpt,
  getUserOpt,
  postUserOpt,
  putUserOpt,
  deleteUserOpt,
};
