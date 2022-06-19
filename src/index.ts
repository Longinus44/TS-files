
import express,{Request,Response} from 'express';
import bodyParser from 'body-parser';
// import dotenv from 'dotenv';

const server = express();

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

const port = 3000;
// const port = process.env.PORT;

server.get('/',(req: Request, res: Response) => {
 res.send('Express + TypeScript Server');
});

server.get('/users',(req: Request, res: Response) => {
    let users = ["Alex","Prince","Obinna"];
    res.send(users);
});

server.post('/users',(req: Request, res: Response) => {
    let users = req.body;
     res.send(users);
});


server.patch('/upusers',(req: Request, res: Response) => {
    let upusers = ['longinus', 'peace', 'ebus']
     res.send(upusers);
});


server.delete('/users',(req: Request, res: Response) => {
    let users = req.body;
     res.send(users);
});
server.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})
