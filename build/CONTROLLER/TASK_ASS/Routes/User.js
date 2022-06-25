"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
require("body-parser");
const express_1 = __importDefault(require("express"));
const Route = express_1.default.Router();
let users = [{
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
Route.get("/", (req, res) => {
    res.send(users);
});
Route.get("/get_user/:id", (req, res) => {
    res.send("users");
});
Route.post("/", (req, res) => {
    const userObjects = users.map(user => {
        user.id = (0, uuid_1.v4)();
        console.log(users);
        console.log(userObjects);
    });
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