"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueError = void 0;
class ValueError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValueError';
    }
}
exports.ValueError = ValueError;
//# sourceMappingURL=types.js.map