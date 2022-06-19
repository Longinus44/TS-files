import { NextFunction, Request, response, Response, Router } from "express";
import ThemeAcontrol = require("../CONTROLLER/ThemeAcontrol");

class ThemeArouter {
    private _router = Router();
    private _controller = ThemeAcontrol;

    get router(){
        return this._router;
    }
    constructor(){
        this._configure();
    }
    private _configure(){
        this.router.get('/',(req: Request, res: Response, next: NextFunction) => {
            res.status(200).json(this._controller.defaultMethod());
        })
    }
}
export default new ThemeArouter().router;
