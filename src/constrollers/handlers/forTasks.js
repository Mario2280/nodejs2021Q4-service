const {
    getTasks,
    getTask,
    postTask,
    putTask,
    deleteTask,
} = require('../../resources/user.memory.service');


const taskPost = (req, res) => {
    const {body} = req;
    res.send(postTask(body.title, body.order, body.description, body.userId, body.boardId, body.columnId));
}

const taskGet = (req, res) => {
    res.send(getTask(req.body.params.taskId));
}

const taskGetAll = (req, res) => {
    res.send(getTasks());
}

const taskPut = (req, res) => {
    const {body} = req;
    res.send(putTask(req.params.taskId, body.title, body.order, body.description, body.userId, body.boardId, body.columnId));
}

const taskDelete = (req, res) => {
    res.send(deleteTask(req.params.taskId));
}

module.exports = () => ({
    taskPost,
    taskGet,
    taskGetAll,
    taskPut,
    taskDelete
});