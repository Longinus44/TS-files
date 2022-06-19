"use strict";
const express_1 = require("express");
const ThemeBcontrol = require("../CONTROLLER/ThemeBcontrol");
class ThemeBrouter {
    constructor() {
        this.private_router = (0, express_1.Router)();
        this.private_controller = ThemeBcontrol;
        this._configure();
    }
    get router() {
        return this.private_router;
    }
    _configure() {
        this.router.get('/', (req, res, next) => {
            res.status(200).json(this.private_controller.defaultMethod());
        });
    }
}
module.exports = new ThemeBrouter().router;
//# sourceMappingURL=ThemeBrouter.js.map