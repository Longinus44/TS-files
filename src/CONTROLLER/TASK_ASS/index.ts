import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { createUser, getuser, updateUser } from "./User";


const server = express();
const port = 4000;

server.use(bodyParser.urlencoded({ extended: true }));

server.get('/')

server.post('/')

server.patch('/')

server.listen(port, () => {
    console.log(`server is active on http://localhost:${port}`);

})
