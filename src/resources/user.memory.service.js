const User = require('./UserModel');
const Board = require('./BoardModel');
const Task = require('./TaskModel');

const Users = [];
let Tasks = [];
const Boards = [];


const getUsers = () => Users;

const getUser = (id) => {
    const res = Users.find((val) => val.id === id);
    if (res) {
        return User.toResponse(res);
    } 
        return {message: "User not found"};
    
};

const postUser = (name, login, password) => {
    const res = new User(name, login, password);
    Users.push(res);
    
    return User.toResponse(res);
};

const putUser = (name, login, password, id) => {
    const res = Users.findIndex((value) => value.id === id);
    if (res >= 0) {
        Users[res].name = name;
        Users[res].login = login;
        Users[res].password = password;
        return Users[res];
    } 
        return {message: "User not found"};
    
};

const deleteUser = (id) => {
    const res = Users.find((value) => value.id === id);
    if (res >= 0) {
        Tasks = Tasks.filter((val) => val.userId !== id);
        Users.splice(res, 1);
        return {message: `User ${Users[res].id} deleted`};
    } 
        return {message: "User not found"};
    
};



const getTasks = () => Tasks;

const getTask = (id) => {
    const res = Tasks.find((val) => val.id === id);
    if (res) {
        return Task.toResponse(res);
    } 
        return {message: "Task not found"};
    
};

const postTask = (title, order, description, userId, boardId, columnId) => {
    Tasks.push(new Task(title, order, description, userId, boardId, columnId));
    return {message: `Task created`};
};

const putTask = (id, title, order, description, userId, boardId, columnId) => {
    const res = Tasks.findIndex((value) => value.id === id);
    if (res >= 0) {
        Tasks[res].title = title;
        Tasks[res].order = order;
        Tasks[res].description = description;
        Tasks[res].userId = userId;
        Tasks[res].boardId = boardId;
        Tasks[res].columnId = columnId;
        return {message: `Task ${Tasks[res].id}updated`};
    } 
        return {message: "Task not found"};
    
};

const deleteTask = (id) => {
    const res = Tasks.find((value) => value.id === id);
    if (res >= 0) {
        Tasks.splice(res, 1);
        return {message: `Task ${Tasks[res].id} deleted`};
    } 
        return {message: "Task not found"};
    
};


const getBoards = () => Boards;

const getBoard = (id) => {
    const res = Boards.find((val) => val.id === id);
    if (res) {
        return Board.toResponse(res);
    } 
        return {message: "Board not found"};
    
};

const postBoard = (title, order, columns) => {
    const res = new Board(title, order, columns);
    Boards.push(res);
    return res;
};

const putBoard = (title, order, columns, id) => {
    const res = Boards.findIndex((value) => value.id === id);
    if (res >= 0) {
        Boards[res].title = title;
        Boards[res].order = order;
        Boards[res].columns = columns;
        return {message: `Board ${Boards[res].id}updated`};
    } 
        return {message: "Board not found"};
    
};

const deleteBoard = (id) => {
    const res = Boards.find((value) => value.id === id);
    if (res >= 0) {
        Tasks = Tasks.filter((val) => val.boardId !== id);
        Boards.splice(res, 1);
        return {message: `Board ${Boards[res].id} deleted`};
    } 
        return {message: "Board not found"};
    
};


module.exports = {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser,

    getBoards,
    getBoard,
    postBoard,
    putBoard,
    deleteBoard,

    getTasks,
    getTask,
    postTask,
    putTask,
    deleteTask,

}




