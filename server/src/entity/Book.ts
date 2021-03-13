import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import {Hobby} from "./Hobby";
import { User } from "./User";

@Entity()
export class Book extends Hobby {

@ManyToOne(type => User, user => user.books)
user: User;

}
