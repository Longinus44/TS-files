import { NextFunction, Request, response, Response, Router } from "express";
import ThemeBcontrol = require("../CONTROLLER/ThemeBcontrol");

class ThemeBrouter {
    private_router = Router();
    private_controller = ThemeBcontrol;

    get router() {
        return this.private_router;
    }
    constructor() {
        this._configure();
    }
    private _configure() {
        this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.status(200).json(this.private_controller.defaultMethod());
        })
    }
}
export = new ThemeBrouter().router;
