import {UserController} from "./controller/UserController";
import SignInController from "./controller/SignInController";
import SignUpController from "./controller/SignUpController";
import { Router } from "express";

const router = Router();
//Login route
router.post("/signin", SignInController.login);

router.post("/signup", SignUpController.newUser);

//Edit one user
router.get("/:username",   UserController.getHobbies);
router.post("/book",   UserController.newBook);

export default router;