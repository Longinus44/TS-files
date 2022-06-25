"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postschema = new mongoose_1.Schema({
    _id: { type: String },
    username: { type: String, required: true },
    Email: { type: String },
    password: { type: String, required: true }
});
//# sourceMappingURL=postmodules.js.map