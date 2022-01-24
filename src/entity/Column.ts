/* eslint-disable max-classes-per-file */
import { OneToMany, ManyToOne } from 'typeorm';
import Content from './Content';
// eslint-disable-next-line import/no-cycle
import Task from './Task';
// eslint-disable-next-line import/no-cycle
import Board from './Board';

export default class Column extends Content {

    @OneToMany(() => Task, task => task.column)
    tasks: Task[];

    @ManyToOne(() => Board, board => board.columns)
    boardId: Board;

}
