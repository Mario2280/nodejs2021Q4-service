import { FastifyRequest, FastifyReply } from 'fastify';
import {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
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
const userPost = (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  res.code(201);
  res.header('Content-Type', 'application/json');
  res.send(postUser(body));
};
/**
 *
 * @param req Request including field userID and body realizing  {@link IUser}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const userGet = (req: CustomRequest, res: FastifyReply) => {
  res.header('Content-Type', 'application/json');
  res.send(getUser(req.params.userId));
};
/**
 *
 * @param req Request including field userID and body realizing  {@link IUser}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const userGetAll = (req: FastifyRequest, res: FastifyReply) => {
  res.code(200);
  res.header('Content-Type', 'application/json');
  res.send(getUsers());
};
/**
 *
 * @param req Request including field userID and body realizing  {@link IUser}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const userPut = (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  res.header('Content-Type', 'application/json');
  res.code(200);
  res.send(putUser(body));
};
/**
 *
 * @param req Request including field userID and body realizing  {@link IUser}
 * @param res Default fastify response {@link FastifyReply}
 * @returns void
 */
const userDelete = (req: CustomRequest, res: FastifyReply) => {
  res.send(deleteUser(req.params.userId));
};

export = () => ({
  userPost,
  userGet,
  userGetAll,
  userPut,
  userDelete,
});
