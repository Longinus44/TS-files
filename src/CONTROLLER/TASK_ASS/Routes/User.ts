import type { Express, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import bodyParser from "body-parser";
import express from "express";
import { request } from "https";

const Route = express.Router()

const users: object[] = [{
    firstname: 'john',
    lastname: 'wick',
    age: 22
},
{
    firstname: 'jane',
    lastname: 'dome',
    age: 25
}
]

let newUser: Object = {
    firstname: 'peace',
    lastname: 'faxt',
    age: 32
}

Route.get("/", (req: Request, res: Response) => {
    res.send(users);
});

Route.get("/get_user/:id", (req: Request, res: Response) => {
    res.send("users");
});

Route.post("/", (req: Request, res: Response) => {
    users.push(newUser);
    res.send(users);
});

Route.patch("/", (req: Request, res: Response) => {
    res.send(newUser);
});

Route.delete("/", (req: Request, res: Response) => {
    res.send(users);
});

export default Route;