import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import router from "./routes";
import {User} from "./entity/User";
import * as cors from "cors";


createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    // Call midlewares
    app.use(cors());
    app.use(bodyParser.json());

    //Set all routes from routes folder
    app.use("/", router);

    // start express server
    app.listen(4000);
    console.log("Express server has started on port 4000. Open http://localhost:4000/ to see results");

}).catch(error => console.log(error));
