"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require("express");
const server = (0, express_1.default)();
const port = 4000;
server.use(body_parser_1.default.urlencoded({ extended: true }));
server.get('/:name/:email', (req, res) => {
    let name = req.params.name;
    let email = req.params.email;
    res.send(name + ' ' + email);
});
server.post('/:name/:id?', (req, res) => {
    let name = req.params.name, id = req.params.id;
    if (id !== null) {
        return (`${name} ${id}`);
    }
    res.send(name);
});
server.get('/phone_no/:email?', (req, res) => {
    let phone_no = req.params.phone_no;
    let email = req.params.email;
    if (email !== null) {
        return (`${phone_no} ${email}`);
    }
    res.send(phone_no);
});
server.patch('/name/:email', (req, res) => {
    let name = req.query.name;
    res.send(name);
});
server.listen(port, () => {
    console.log(`server is active on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map