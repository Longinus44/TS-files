import  express, { Request, Response } from "express";
import bodyParser from "body-parser";

import { query } from "express";
const server = express();
const port = 4000;
server.use(bodyParser.urlencoded({extended: true}));

server.get('/:name/:email',(req:Request, res:Response)=>{
    let name = req.params.name;
     let email = req.params.email;
    res.send(name + ' ' + email)
})

server.post('/:name/:id?',(req:Request, res: Response)=>{
     let name = req.params.name,
       id = req.params.id
     if(id !== null){
        return (`${name} ${id}`)
     }
    res.send(name)
})

server.get('/phone_no/:email?', (req:Request, res:Response)=>{
    let phone_no = req.params.phone_no;
      let  email = req.params.email;
        if(email !== null){
            return (`${phone_no} ${email}`)
        }
    res.send(phone_no)
})

server.patch('/name/:email', (req:Request, res:Response)=>{
    let name = req.query.name
   res.send(name)
})

server.listen(port,()=>{
    console.log(`server is active on http://localhost:${port}`);
    
})
