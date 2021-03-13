import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import * as bcrypt from "bcryptjs";
import { Hobby } from "./Hobby";
import { Book } from "./Book";
import { Movie } from "./Movie";
import { VideoGame } from "./VideoGame";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    username: string;
    
    @Column()
    password: string;

    @OneToMany(type => Book, book => book.user) 
    books: Book[];

    @OneToMany(type => Movie, movie => movie.user) 
    movies: Movie[];

    @OneToMany(type => VideoGame, videogame => videogame.user) 
    videogames: VideoGame[];

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
      }

      checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
      }

}
