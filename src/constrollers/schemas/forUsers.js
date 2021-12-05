const str = {type: 'string'};
const num = {type: 'number'};
const user = {
    type: 'object',
    // хз
    // required: ['name', 'login', 'password'],
    properties: {
        name: str,
        login: str,
        password: str
    }
}

const getUsersSchema = {
    response: {
        200: {
            type: 'array',
            items: user
        }
    }
};

const getUserSchema = {
    params: {
        userId: num,
    },
    response: {
        200: user
    }
};

const postUserSchema = {
    body: {
        user
    },
    response: {
        200: str,
    }
};

const putUserSchema = {
    body: user,
    params: {
        userId: num,
    },
    response: {
        200: str
    }
};

const deleteUserSchema = {
    params: {
        userId: str
    },
    response: {
        200: str,
    }
};

module.exports = () => ({getUsersSchema, getUserSchema, postUserSchema, putUserSchema, deleteUserSchema});




