const {
    getBoards,
    getBoard,
    postBoard,
    putBoard,
    deleteBoard,
} = require('../../resources/user.memory.service');


const boardPost = (req, res) => {
    const {body} = req;
    res.header('Content-Type', 'application/json');
    res.status(201);
    res.send(postBoard(body.title, body.order, body.columns));
}

const boardGet = (req, res) => {
    res.header('Content-Type', 'application/json');
    res.status(200);
    res.send(getBoard(req.params.boardId));
}

const boardGetAll = (req, res) => {
    res.send(getBoards());
}

const boardPut = (req, res) => {
    const {body} = req;
    res.send(putBoard(body.title, body.order, body.columns, req.params.boardId));
}

const boardDelete = (req, res) => {
    res.send(deleteBoard(req.params.boardId));
}

module.exports = () => ({
    boardPost,
    boardGet,
    boardGetAll,
    boardPut,
    boardDelete
});