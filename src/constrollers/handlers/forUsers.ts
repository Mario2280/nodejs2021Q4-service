import { FastifyRequest, FastifyReply } from 'fastify';
import {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
  authUser
} from '../../resources/services/user.memory.service';
import { IUser } from '../../resources/models/UserModel';

type CustomRequest = FastifyRequest<{
  Params: {
    userId: string;
  };
  Body: IUser;
}>;
/**
 *
 * @param req Request including field userID and body realizing  {@link IUser}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
//Change to registration 
const userPost = async (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  res.code(201);
  res.header('Content-Type', 'application/json');
  const result = await postUser(body);
  res.send({
    id: result?.id,
    name: result?.name,
    login: result?.login
  });
};

const authorization = async (req: CustomRequest, res: FastifyReply) => {
  const {login, password} = req.body;
  if (!login || !password) {
    res.status(401).send("Authorization prop is missing!!!");
  }
  const result = authUser(req.body);
  if(!Object.prototype.hasOwnProperty.call(result, 'token')){
    res.status(401).send(result);
  }
  res.status(200).send(result);
}
/**
 *
 * @param req Request including field userID and body realizing  {@link IUser}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const userGet = async (req: CustomRequest, res: FastifyReply) => {
  res.header('Content-Type', 'application/json');
  const result = await getUser(req.params.userId)
  res.send(result);
};
/**
 *
 * @param req Request including field userID and body realizing  {@link IUser}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const userGetAll = async (req: FastifyRequest, res: FastifyReply) => {
  res.code(200);
  res.header('Content-Type', 'application/json');
  res.send(await getUsers());
};
/**
 *
 * @param req Request including field userID and body realizing  {@link IUser}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const userPut = async (req: CustomRequest, res: FastifyReply) => {
  const { body, params } = req;
  Object.defineProperty(body, "id", {
    value: params.userId
  });
  res.header('Content-Type', 'application/json');
  res.code(200);
  res.send(await putUser(body));
};
/**
 *
 * @param req Request including field userID and body realizing  {@link IUser}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const userDelete = async (req: CustomRequest, res: FastifyReply) => {
  res.send(JSON.stringify(await deleteUser(req.params.userId)));
};




export = () => ({
  authorization,
  userPost,
  userGet,
  userGetAll,
  userPut,
  userDelete,
});
