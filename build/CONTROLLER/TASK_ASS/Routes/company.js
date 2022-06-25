"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Route = express_1.default.Router();
Route.get('/', (req, res) => {
    res.send();
});
Route.post('/', (req, res) => {
    res.send();
});
Route.put('/', (req, res) => {
    res.send();
});
Route.patch('/', (req, res) => {
    res.send();
});
Route.delete('/', (rteq, res) => {
    res.send();
});
exports.default = Route;
//# sourceMappingURL=company.js.map