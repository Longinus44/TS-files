"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const User_1 = __importDefault(require("./Routes/User"));
const school_1 = __importDefault(require("./Routes/school"));
const company_1 = __importDefault(require("./Routes/company"));
require("http");
require("process");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
const port = 4000;
server.use((0, cors_1.default)());
server.use(body_parser_1.default.urlencoded({ extended: true }));
server.use("/users", User_1.default);
server.use('/school', school_1.default);
server.use('/company', company_1.default);
mongoose_1.default.connect('process.env.DB_CONNECTION', () => {
    console.log('connected to DB');
});
server.listen(port, () => {
    console.log(`server is active on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map