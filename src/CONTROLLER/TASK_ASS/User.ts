import type { Express, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import bodyParser from "body-parser";



let user = [{
    firstname: 'john',
    lastname: 'wick',
    age: 22
},
{
    firstname: 'jane',
    lastname: 'cone',
    age: 23
}
]

export const createUser = (req: Request, res: Response) => res.send('ready to go')

export const getuser = (req: Request, res: Response) => res.send('user on the way')

export const updateUser = (req: Request, res: Response) => res.send()
