import User, { IUser } from '../models/UserModel';
import { filterTasks } from './task.memory.service';

const Users: Array<User> = [];

/**
 *
 * @returns Return all userss which exist
 */
const getUsers = () => Users;

/**
 *
 * @param id Id requested user
 * @returns Return {@link IUser} without password or message, when task not found
 */
const getUser = (id: string) => {
  const res = Users.find((val) => val.id === id);
  if (res) {
    return User.toResponse(res);
  }
  return { message: 'User not found' };
};

/**
 *
 * @param objUser {@link IUser} obj without id
 * @returns Return created {@link IUser} obj without password
 */
const postUser = (objUser: IUser) => {
  const res = new User(objUser);
  Users.push(res);

  return User.toResponse(res);
};

/**
 *
 * @param id Id requested for change task
 * @param objUser New prop {@link IUser} of a user
 * @returns retrun error message or created user without password
 */
const putUser = (objUser: IUser) => {
  const { name, login, password, id } = objUser;
  const res = Users.findIndex((value) => value.id === id);
  if (res >= 0) {
    Users[res].name = name;
    Users[res].login = login;
    Users[res].password = password;
    return User.toResponse(Users[res]);
  }
  return { message: 'User not found' };
};

/**
 *
 * @param id Id of the user which we want to delete
 * @returns Return message success or error
 */
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
