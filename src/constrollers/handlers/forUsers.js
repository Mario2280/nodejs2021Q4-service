const {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require('../../resources/services/user.memory.service');

const userPost = (req, res) => {
  const { body } = req;
  res.code(201);
  res.header('Content-Type', 'application/json');
  res.send(postUser(body.name, body.login, body.password));
};

const userGet = (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(getUser(req.params.userId));
};

const userGetAll = (req, res) => {
  res.code(200);
  res.header('Content-Type', 'application/json');
  res.send(getUsers());
};

const userPut = (req, res) => {
  const { body } = req;
  res.header('Content-Type', 'application/json');
  res.code(200);
  res.send(putUser(body.name, body.login, body.password, req.params.userId));
};

const userDelete = (req, res) => {
  res.send(deleteUser(req.params.userId));
};

module.exports = () => ({
  userPost,
  userGet,
  userGetAll,
  userPut,
  userDelete,
});
