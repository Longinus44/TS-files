import { Router } from "express";
import ThemeArouter from './ThemeArouter';
import ThemeBrouter from './ThemeBrouter';

export class MasterRouter {
    private _router = Router();
    private _subrouterA = ThemeArouter;
    private _subrouterB = ThemeBrouter;

    constructor() {
        this._configure();
    }

    get router() {
        return this._router
    }

    private _configure() {
        this._router.use('./ThemeArouter', this._subrouterA);
        this._router.use('./ThemeBrouter', this._subrouterB);
    }
}

export let name = 'Alex';


 


