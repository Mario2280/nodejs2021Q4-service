/* eslint-disable import/no-cycle */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Task from './Task';
import ColumnEntity from './Column';


@Entity()
export default class Board {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({array: true, type:'text'})
    @OneToMany(() => ColumnEntity, column => column.boardId, {onDelete:"CASCADE"})
    columns:ColumnEntity[];

    @OneToMany(() => Task, task => task.board, { cascade: true })
    tasks: Task[];
}   