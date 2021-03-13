import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export  abstract class Hobby {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}