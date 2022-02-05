


import { validate as isCorrectUuid } from "uuid";
import { getRepository } from "typeorm";
import TaskConstructor, { ITask } from '../models/TaskModel';
import Task from '../../entity/Task';

interface PutTask {
  title?: string;
  order?: number;
  description?: string;
  userId?: string;
  columnId?: string;
  boardId?: string;
}

/**
 *
 * @param id by which we filter {@link Tasks}
 * @param byUser Flag, false - filter by boardId, true - filter by userId
 * @returns void
 */

/**
 *
 * @returns Return all tasks which exist
 */
const getTasks = async (): Promise<Task[]> => {
  const result = await getRepository(Task).find();
  return result;
};

/**
 *
 * @param id Id requested task
 * @returns Return {@link ITask} or null, when task not found
 */
const getTask = async (id: string): Promise<Task | null> => {
  if (isCorrectUuid(id)) {
    const result = await getRepository(Task).findOne(id);
    if (result instanceof Task) {
      return result;
    }
    return null;
  }
  return null;
  //return Error('Bad uuid');
};

/**
 *
 * @param taskObj {@link ITask} obj without id
 * @returns Return created {@link ITask} obj
 */
const postTask = async (taskObj: ITask): Promise<TaskConstructor> => {
  const newTask = new TaskConstructor(taskObj);
  const result = await getRepository(Task)
    .createQueryBuilder('task')
    .insert()
    .into(Task)
    .values(newTask)
    .execute();
    newTask.id = result.raw[0].id;
  return newTask;
};

/**
 *
 * @param id Id requested for change task
 * @param taskObj New prop {@link ITask} of a task
 * @returns message success or error
 */
const putTask = async (id: string, taskObj: ITask): Promise<{ message: string }> => {
  const toPut : PutTask = {};
  if (Object.prototype.hasOwnProperty.call(taskObj, 'title')){
    toPut.title = taskObj.title
  }
  if (Object.prototype.hasOwnProperty.call(taskObj, 'description')){
    toPut.description = taskObj.description
  }
  if (Object.prototype.hasOwnProperty.call(taskObj, 'order')){
    toPut.order = taskObj.order
  }
  if (Object.prototype.hasOwnProperty.call(taskObj, 'columnId')){
    toPut.columnId = taskObj.columnId
  }
  if (Object.prototype.hasOwnProperty.call(taskObj, 'boardId')){
    toPut.boardId = taskObj.boardId
  }    
    await getRepository(Task)
      .createQueryBuilder('task')
      .update(Task) 
      .set(toPut)
      .where('id = :id', { id })
      .execute();
    const result = await getRepository(Task)
      .createQueryBuilder('task')
      .where("id = :id", { id })
      .getOne();
    if (result) {
      return { message: `Task ${result.id} updated` };
    }
    return { message: 'Task not found' };
  }



/**
 *
 * @param id Id of the task which we want to delete
 * @returns Return deleted {@link ITask} obj or null, when task not found
 */
const deleteTask = async (id: string) => {
  if (isCorrectUuid(id)) {
    const result = await getRepository(Task)
      .createQueryBuilder('taskId')
      .delete()
      .from(Task)
      .where('id = :id', { id })
      .execute();
    if (result) {
      return result;
    }
  }
  return null;
};

export { getTasks, getTask, postTask, putTask, deleteTask };
