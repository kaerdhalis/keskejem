import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import { Book } from "../entity/Book";
import { Movie } from "../entity/Movie";
import { VideoGame } from "../entity/VideoGame";

export class UserController {

    static getHobbies = async (req: Request, res: Response) => {
        //Get the ID from the url
        const username = req.params.username;
      
        //Get values from the body
        console.log(username);
        //Try to find user on database
        const userRepository = getRepository(User);
        let user:User;
        try {
          user = await userRepository.findOneOrFail({ where: { username } });
        } catch (error) {
          //If not found, send a 404 response
          res.status(404).send("User not found");
          return;
        }

        const books = await getRepository(Book)
                    .createQueryBuilder("book")
                    .where("book.user = :id",{id: user.id})
                    .orderBy("book.name","DESC")
                    .getMany();


        const movies = await getRepository(Movie)
                    .createQueryBuilder("movie")
                    .where("movie.user = :id",{id: user.id})
                    .orderBy("movie.name","DESC")
                    .getMany();

        const videogames = await getRepository(VideoGame)
                    .createQueryBuilder("videogame")
                    .where("videogame.user = :id",{id: user.id})
                    .orderBy("videogame.name","DESC")
                    .getMany();

        res.send(books,movies,videogames);
    }

    static newBook = async (req: Request, res: Response) => {
        //Get parameters from the body
        let { name, userId } = req.body;
        let book = new Book();
        book.name = name;
        book.user = userId;
     
        //Try to save. If fails, the username is already in use
        const bookRepository = getRepository(Book);
        try {
          await bookRepository.save(book);
        } catch (e) {
            console.log(e);
          res.status(409).send("book already saved");
          return;
        }
      
        //If all ok, send 201 response
        res.status(201).send("book created");
      };
}