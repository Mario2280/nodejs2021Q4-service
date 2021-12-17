const {
    getBoards,
    getBoard,
    postBoard,
    putBoard,
    deleteBoard,
} = require('../../resources/user.memory.service');


const boardPost = (req, res) => {
    const {body} = req;
    res
    .code(201)
    .header('Content-Type', 'application/json')
    .send(postBoard(body));
}

const boardGet = (req, res) => {
    res.header('Content-Type', 'application/json');
    const result = getBoard(req.params.boardId);
    if(result === 404){
        res.code(404).send();
    } else{
        res.send(result);
    }

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