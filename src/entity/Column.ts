/* eslint-disable max-classes-per-file */
import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
// eslint-disable-next-line import/no-cycle
import Task from './Task';
// eslint-disable-next-line import/no-cycle
import Board from './Board';

@Entity()
export default class Columns{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column()
    title: string;

    @Column()
    order: number;

    @OneToMany(() => Task, task => task.column)
    tasks: Task[];

    @ManyToOne(() => Board, board => board.columns)
    boardId: Board;

}
