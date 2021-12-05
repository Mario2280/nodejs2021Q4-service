const str = {type: 'string'};
const num = {type: 'number'};

const task = {
    type: 'object',
    // required: ['title', 'order', 'description', 'userId', 'boardId', 'columnId'],
    properties: {
        title: str,
        order: str,
        description: str,
        userId: str,
        boardId: str,
        columnId: str
    }
}

const getTasksSchema = {
    response: {
        200: {
            type: 'array',
            items: task
        }
    }
};

const getTaskSchema = {
    params: {
        taskId: num,
    },
    response: {
        200: task
    }
};

const postTaskSchema = {
    body: {
        task
    },
    response: {
        200: str,
    }
};

const putTaskSchema = {
    body: task,
    params: {
        taskId: num,
    },
    response: {
        200: str
    }
};

const deleteTaskSchema = {
    params: {
        taskId: str
    },
    response: {
        200: str,
    }
};

module.exports = () => ({getTasksSchema, getTaskSchema, postTaskSchema, putTaskSchema, deleteTaskSchema});
