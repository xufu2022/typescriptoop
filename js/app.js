"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getset_1 = require("./ch1/getset");
const message = new getset_1.Message('New Course!!! Just $9.99!!!', 'Check out our latest course on OOP with TypeScript!');
message.messageStatus;
let tr = message.previewMessage();
console.log(tr);
//# sourceMappingURL=app.js.map