import userHandler from '../constrollers/handlers/forUsers';
import userSchema from '../constrollers/schemas/forUsers';

const authUser = {
  schema: userSchema().authUserSchema,
  handler:userHandler().authorization,
}

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

export = () => ({
  authUser,
  getUsersOpt,
  getUserOpt,
  postUserOpt,
  putUserOpt,
  deleteUserOpt,
});
