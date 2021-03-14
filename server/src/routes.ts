import {UserController} from "./controller/UserController";
import SignInController from "./controller/SignInController";
import SignUpController from "./controller/SignUpController";
import { Router } from "express";

const router = Router();
//Login route
router.post("/signin", SignInController.login);

router.post("/signup", SignUpController.newUser);

//Edit one user
router.get("/:username/books",   UserController.getBooks);
router.get("/:username/movies",   UserController.getMovies);
router.get("/:username/videogames",   UserController.getVideogames);
router.post("/:username/book",   UserController.newBook);
router.post("/:username/movie",   UserController.newMovie);
router.post("/:username/videogame",   UserController.newVideogame);

export default router;