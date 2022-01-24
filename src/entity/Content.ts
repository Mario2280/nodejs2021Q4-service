/* eslint-disable max-classes-per-file */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default abstract class Content {

    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column()
    title: string;

    @Column()
    order: number;
}
