/* eslint-disable import/no-cycle */
import { Column, ManyToOne, JoinColumn } from 'typeorm';
import Content from './Content';
import User from './User';
import Board from './Board';
import ColumnEntity from './Column';

export default class Task extends Content {

    @Column()
    description: string;

    @Column()
    userId: string;
    
    @ManyToOne(() => User, users => users.tasks, { onDelete: 'SET NULL' })
    @JoinColumn({name: 'userId'})
    user: User;

    // eslint-disable-next-line spaced-comment
    //No profit 
    @Column({ nullable: true })
    columnId: string;

    @ManyToOne(() => ColumnEntity, column => column.tasks, { onDelete: 'SET NULL' })
    @JoinColumn({name: 'columnId'})
    column: ColumnEntity;

    
    @Column()
    boardId: string;

    @ManyToOne(() => Board, board => board.tasks, { onDelete: 'CASCADE' })
    @JoinColumn({name: 'boardId'})
    board:Board

}

