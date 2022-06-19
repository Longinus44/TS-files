"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import dotenv from 'dotenv';
const server = (0, express_1.default)();
// parse application/x-www-form-urlencoded
server.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
server.use(body_parser_1.default.json());
const port = 3000;
// const port = process.env.PORT;
server.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
server.get('/users', (req, res) => {
    let users = ["Alex", "Prince", "Obinna"];
    res.send(users);
});
server.post('/users', (req, res) => {
    let users = req.body;
    res.send(users);
});
server.patch('/upusers', (req, res) => {
    let upusers = ['longinus', 'peace', 'ebus'];
    res.send(upusers);
});
server.delete('/users', (req, res) => {
    let users = req.body;
    res.send(users);
});
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map