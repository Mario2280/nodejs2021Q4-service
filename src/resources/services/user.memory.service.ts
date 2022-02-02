import bcrypt from 'bcryptjs';
import { validate as isCorrectUuid } from "uuid";
import { getRepository } from "typeorm";
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../../entity/User';
import UserConstructor, { IUser } from '../models/UserModel';


/**
 *
 * @returns Return all userss which exist
 */
const getUsers = async () => {
  const result = await getRepository(User).find();
  return result;
};

/**
 *
 * @param id Id requested user
 * @returns Return {@link IUser} without password or message, when task not found
 */
const getUser = async (id: string) => {
  if (isCorrectUuid(id)) {
    const result = await getRepository(User).findOne(id);
    if (result instanceof User) {
      return {
        name: result.name,
        login: result.login,
        id: result.id
      };
    };
    return { message: 'User not found' }
  }
  return { message: 'Incorrect uuid' };
}



/**
 *
 * @param objUser {@link IUser} obj without id
 * @returns Return created {@link IUser} obj without password
 */
const postUser = async (objUser: IUser) => {
  const newUser = new UserConstructor(objUser);
  await getRepository(User)
    .createQueryBuilder('user')
    .insert()
    .into(User)
    .values(newUser)
    .execute();
  const result = await getRepository(User).findOne({ where: { login: objUser.login } });
  return result;
};

/**
 *
 * @param id Id requested for change task
 * @param objUser New prop {@link IUser} of a user
 * @returns retrun error message or created user without password
 */
const putUser = async (objUser: IUser) => {
  if (Object.prototype.hasOwnProperty.call(objUser, 'password') &&
    Object.prototype.hasOwnProperty.call(objUser, 'login') &&
    Object.prototype.hasOwnProperty.call(objUser, 'name')) {
    await getRepository(User)
      .createQueryBuilder('user')
      .update(User)
      .where("id = :id", { id: objUser.id })
      .set({
        login: objUser.login,
        name: objUser.name,
        password: objUser.password
      })
      .execute();
    const result = await getRepository(User)
      .createQueryBuilder('user')
      .where('id = :id', { id: objUser.id })
      .getOne();
    if (result) {
      return result;
    }
    return { message: 'User not found' };
  }
  return { message: "Incorrect user format" };
};

/**
 *
 * @param id Id of the user which we want to delete
 * @returns Return message success or error
 */
const deleteUser = async (id: string) => {
  if (isCorrectUuid(id)) {
    const result = await getRepository(User)
      .createQueryBuilder('user')
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute()
    if (result) {
      return { message: `User ${id} deleted` };
    }
    return { message: 'User not found' };
  }
  return { message: 'Incorrect uuid' };
};

const generateAccesstoken = (user: { id: string, login: string }) => {
  const payload = {
    userId: user.id,
    login: user.login,
  };
  config();
  return jwt.sign(payload, <string>process.env.JWT_SECRET_KEY);
}

const authUser = async (user: { login: string, password: string }): Promise<{ token: string } | string> => {
  try {
    const candidate = await getRepository(User).findOne({ where: { login: user.login } });
    if (!candidate) {
      return `User not found`;
    }
    const validePassword = bcrypt.compareSync(user.password, candidate.password);
    if (!validePassword) {
      return `Incorrect password`;
    }
    const accesstoken = generateAccesstoken({ id: candidate.id, login: candidate.login });
    return { token: accesstoken };
  } catch (error) {
    return <string>error;
  }

}

export { getUsers, getUser, postUser, putUser, deleteUser, authUser };
