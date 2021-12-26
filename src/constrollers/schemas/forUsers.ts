const str = { type: 'string' };

const user = {
  type: 'object',
  properties: {
    name: str,
    login: str,
    password: str,
    id: str,
  },
};

const getUsersSchema = {
  response: {
    200: {
      type: 'array',
      items: user,
    },
  },
};

const getUserSchema = {
  params: {
    userId: str,
  },
  response: {
    200: user,
  },
};

const postUserSchema = {
  body: {
    user,
  },
  response: {
    201: user,
  },
};

const putUserSchema = {
  body: user,
  params: {
    userId: str,
  },
  response: {
    200: {
      type: 'object',
      properties: {
        name: str,
        login: str,
        id: str,
      },
    },
  },
};

const deleteUserSchema = {
  params: {
    userId: str,
  },
  response: {
    200: str,
  },
};

export = () => ({
  getUsersSchema,
  getUserSchema,
  postUserSchema,
  putUserSchema,
  deleteUserSchema,
});
