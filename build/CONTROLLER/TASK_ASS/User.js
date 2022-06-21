"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getuser = exports.createUser = void 0;
require("uuid");
require("body-parser");
let user = [{
        firstname: 'john',
        lastname: 'wick',
        age: 22
    },
    {
        firstname: 'jane',
        lastname: 'cone',
        age: 23
    }
];
const createUser = (req, res) => res.send('ready to go');
exports.createUser = createUser;
const getuser = (req, res) => res.send('user on the way');
exports.getuser = getuser;
const updateUser = (req, res) => res.send();
exports.updateUser = updateUser;
//# sourceMappingURL=User.js.map