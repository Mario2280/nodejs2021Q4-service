import User, { IUser } from '../models/UserModel';
import { filterTasks } from './task.memory.service';

const Users: Array<User> = [];

const getUsers = () => Users;

const getUser = (id: string) => {
  const res = Users.find((val) => val.id === id);
  if (res) {
    return User.toResponse(res);
  }
  return { message: 'User not found' };
};

const postUser = (objUser: IUser) => {
  const res = new User(objUser);
  Users.push(res);

  return User.toResponse(res);
};

const putUser = (objUser: IUser) => {
  const { name, login, password, id } = objUser;
  const res = Users.findIndex((value) => value.id === id);
  if (res >= 0) {
    Users[res].name = name;
    Users[res].login = login;
    Users[res].password = password;
    return Users[res];
  }
  return { message: 'User not found' };
};

const deleteUser = (id: string) => {
  const res = Users.findIndex((value) => value.id === id);
  if (res !== 0) {
    filterTasks(id, true);
    Users.splice(res, 1);
    return { message: `User ${id} deleted` };
  }
  return { message: 'User not found' };
};

export { getUsers, getUser, postUser, putUser, deleteUser };
