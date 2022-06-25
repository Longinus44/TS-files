"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ThemeAcontrol = require("../CONTROLLER/ThemeAcontrol");
class ThemeArouter {
    constructor() {
        this._router = (0, express_1.Router)();
        this._controller = ThemeAcontrol;
        this._configure();
    }
    get router() {
        return this._router;
    }
    _configure() {
        this.router.get('/', (req, res, next) => {
            res.status(200).json(this._controller.defaultMethod());
        });
    }
}
exports.default = new ThemeArouter().router;
//# sourceMappingURL=ThemeArouter.js.map