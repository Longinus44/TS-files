import express, { Express, Request, Response } from "express";
import { request } from "http";

const Route = express.Router();

Route.get('/',(req:Request, res:Response)=>{
    res.send('school is updated');
});

Route.post('/',(req:Request, res:Response)=>{
    res.send();
});

Route.put('/',(req:Request, res:Response)=>{
    res.send();
});

Route.patch('/',(req:Request, res:Response)=>{
    res.send();
});

Route.delete('/',(req:Request, res:Response)=>{
    res.send();
});

export default Route
