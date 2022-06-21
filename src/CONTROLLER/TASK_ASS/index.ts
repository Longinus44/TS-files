import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import userRoute from "./Routes/User";


const server = express();
const port = 4000;

server.use(bodyParser.urlencoded({ extended: true }));

server.use("/users",userRoute)

server.listen(port, () => {
    console.log(`server is active on http://localhost:${port}`);

})
