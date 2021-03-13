import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { User } from "../entity/User";
import config from "../config";

class SignUpController {

    static newUser = async (req: Request, res: Response) => {
        //Get parameters from the body
        let { firstname, lastname, username, password } = req.body;
        let user = new User();
        user.firstName = firstname;
        user.lastName = lastname;
        user.username = username;
        user.password = password;
      
        //Validade if the parameters are ok
        const errors = await validate(user);
        if (errors.length > 0) {
          res.status(400).send(errors);
          return;
        }
      
        //Hash the password, to securely store on DB
        console.log(firstname,lastname,username,password);
        user.hashPassword();
      
        //Try to save. If fails, the username is already in use
        const userRepository = getRepository(User);
        try {
          await userRepository.save(user);
        } catch (e) {
            console.log(e);
          res.status(409).send("username already in use");
          return;
        }
      
        //If all ok, send 201 response
        res.status(201).send("User created");
      };
}
export default SignUpController;