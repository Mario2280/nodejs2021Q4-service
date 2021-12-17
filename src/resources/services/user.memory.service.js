const User = require('../models/UserModel');

const { Tasks } = require('./task.memory.service');

const Users = [];

const getUsers = () => Users;

const getUser = (id) => {
  const res = Users.find((val) => val.id === id);
  if (res) {
    return User.toResponse(res);
  }
  return { message: 'User not found' };
};

const postUser = (name, login, password) => {
  const res = new User(name, login, password);
  Users.push(res);

  return User.toResponse(res);
};

const putUser = (name, login, password, id) => {
  const res = Users.findIndex((value) => value.id === id);
  if (res >= 0) {
    Users[res].name = name;
    Users[res].login = login;
    Users[res].password = password;
    return Users[res];
  }
  return { message: 'User not found' };
};

const deleteUser = (id) => {
  const res = Users.findIndex((value) => value.id === id);
  if (res !== 0) {
    for (let i = 0; i < Tasks.length; i += 1) {
      if (Tasks[i].userId === id) {
        Tasks[i].userId = null;
      }
    }
    Users.splice(res, 1);
    return { message: `User ${id} deleted` };
  }
  return { message: 'User not found' };
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
};
