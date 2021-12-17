const boardHandler = require("../constrollers/handlers/forBoards");
const taskHandler = require("../constrollers/handlers/forTasks");
const userHandler = require("../constrollers/handlers/forUsers");


const boardSchema = require("../constrollers/schemas/forBoards");
const taskSchema = require("../constrollers/schemas/forTasks");
const userSchema = require("../constrollers/schemas/forUsers");


const getUsersOpt = {
    schema: userSchema().getUsersSchema,
    handler: userHandler().userGetAll
};

const getUserOpt = {
    schema: userSchema().getUserSchema,
    handler: userHandler().userGet
};

const postUserOpt = {
    schema: userSchema().postUserSchema,
    handler: userHandler().userPost
};

const putUserOpt = {
    schema: userSchema().putUserSchema,
    handler: userHandler().userPut
};

const deleteUserOpt = {
    schema: userSchema().deleteUserSchema,
    handler: userHandler().userDelete
};


const getTasksOpt = {
    schema: taskSchema().getTasksSchema,
    handler: taskHandler().taskGetAll
};

const getTaskOpt = {
    schema: taskSchema().getTaskSchema,
    handler: taskHandler().taskGet
};

const postTaskOpt = {
    schema: taskSchema().postTaskSchema,
    handler: taskHandler().taskPost
};

const putTaskOpt = {
    schema: taskSchema().putTaskSchema,
    handler: taskHandler().taskPut
};

const deleteTaskOpt = {
    schema: taskSchema().deleteTaskSchema,
    handler: taskHandler().taskDelete
};


const getBoardsOpt = {
    schema: taskSchema().getBoardsSchema,
    handler: boardHandler().boardGetAll
};

const getBoardOpt = {
    schema: boardSchema().getBoardSchema,
    handler: boardHandler().boardGet
};

const postBoardOpt = {
    schema: boardSchema().postBoardSchema,
    handler: boardHandler().boardPost
};

const putBoardOpt = {
    schema: boardSchema().putBoardSchema,
    handler: boardHandler().boardPut
};

const deleteBoardOpt = {
    schema: boardSchema().deleteBoardSchema,
    handler: boardHandler().boardDelete
};


const Routes = (fastify, opts, done) => {


    fastify.get('/users', getUsersOpt);

    fastify.get('/users/:userId', getUserOpt);

    fastify.post('/users', postUserOpt);

    fastify.put('/users/:userId', putUserOpt);

    fastify.delete('/users/:userId', deleteUserOpt);




    fastify.get('/boards', getBoardsOpt);

    fastify.get('/boards/:boardId', getBoardOpt);

    fastify.post('/boards', postBoardOpt);

    fastify.put('/boards/:boardId', putBoardOpt);

    fastify.delete('/boards/:boardId', deleteBoardOpt);



    fastify.get('/boards/:boardId/tasks', getTasksOpt);

    fastify.get('/boards/:boardId/tasks/:taskId', getTaskOpt);

    fastify.post('/boards/:boardId/tasks', postTaskOpt);

    fastify.put('/boards/:boardId/tasks/:taskId', putTaskOpt);

    fastify.delete('/boards/:boardId/tasks/:taskId', deleteTaskOpt);


    done();

};


module.exports = Routes;




