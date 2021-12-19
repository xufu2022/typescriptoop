import { Message } from "./ch1/getset";

const message = new Message(
    'New Course!!! Just $9.99!!!',
    'Check out our latest course on OOP with TypeScript!'
);
message.messageStatus;
let tr=message.previewMessage();
console.log(tr);