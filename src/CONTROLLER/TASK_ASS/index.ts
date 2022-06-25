import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import userRoute from "./Routes/User";
import schoolRoute from './Routes/school'
import companyRoute from './Routes/company'
import { request } from "http";
import { env } from "process";
import mongoose from "mongoose";
import cors from 'cors';


const server = express();
const port = 4000;

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/users", userRoute)

server.use('/school', schoolRoute)

server.use('/company', companyRoute)

mongoose.connect('process.env.DB_CONNECTION', () => {
    console.log('connected to DB')
})

server.listen(port, () => {
    console.log(`server is active on http://localhost:${port}`);

})
