import express, { Express, Request, Response } from "express";

const Route = express.Router();

Route.get('/',(req:Request, res:Response)=>{
    res.send();
});

Route.post('/',(req:Request, res:Response)=>{
    res.send();
});

Route.put('/',(req:Request, res: Response)=>{
    res.send();
});

Route.patch('/',(req:Request, res: Response)=>{
    res.send();
});

Route.delete('/',(rteq:Request, res: Response)=>{
    res.send();
});

export default Route