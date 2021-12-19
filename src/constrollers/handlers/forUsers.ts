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

const userPost = (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  res.code(201);
  res.header('Content-Type', 'application/json');
  res.send(postUser(body));
};

const userGet = (req: CustomRequest, res: FastifyReply) => {
  res.header('Content-Type', 'application/json');
  res.send(getUser(req.params.userId));
};

const userGetAll = (req: FastifyRequest, res: FastifyReply) => {
  res.code(200);
  res.header('Content-Type', 'application/json');
  res.send(getUsers());
};

const userPut = (req: CustomRequest, res: FastifyReply) => {
  const { body } = req;
  res.header('Content-Type', 'application/json');
  res.code(200);
  res.send(putUser(body));
};

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
