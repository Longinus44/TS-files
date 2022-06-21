"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("uuid");
require("body-parser");
const express_1 = __importDefault(require("express"));
require("https");
const Route = express_1.default.Router();
const users = [{
        firstname: 'john',
        lastname: 'wick',
        age: 22
    },
    {
        firstname: 'jane',
        lastname: 'dome',
        age: 25
    }
];
let newUser = {
    firstname: 'peace',
    lastname: 'faxt',
    age: 32
};
// let newUser: Object = {
//     firstname: 'peace',
//     lastname: 'faxt',
//     age: 23
// }
Route.get("/", (req, res) => {
    res.send(users);
});
Route.get("/get_user/:id", (req, res) => {
    res.send("users");
});
Route.post("/", (req, res) => {
    users.push(newUser);
    console.log();
    res.send(users);
});
Route.patch("/", (req, res) => {
    res.send(newUser);
});
Route.delete("/", (req, res) => {
    res.send(users);
});
exports.default = Route;
//# sourceMappingURL=User.js.map