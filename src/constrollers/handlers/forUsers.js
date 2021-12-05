const {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser,
} = require('../../resources/user.memory.service');


const userPost = (req, res) => {
    const {body} = req;
    res
    .status(201)
    .send(postUser(body.name, body.login, body.password));
}

const userGet = (req, res) => {
    res.send(getUser(req.params.userId));
}

const userGetAll = (req, res) => {
    res.send(getUsers());
}

const userPut = (req, res) => {
    const {body} = req;
    res.send(putUser(body.name, body.login, body.password, res.params.userId));
}

const userDelete = (req, res) => {
    res.send(deleteUser(req.params.userId));
}

module.exports = () => ({
    userPost,
    userGet,
    userGetAll,
    userPut,
    userDelete
});