"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    constructor(title, message) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
    get messageStatus() {
        const sentMessage = this.isSent ? 'Has been sent.' : 'Has not been sent.';
        return `${this.message} | ${sentMessage}`;
    }
    previewMessage() {
        return this.message.slice(0, 10).concat('...');
    }
}
exports.Message = Message;
//# sourceMappingURL=getset.js.map