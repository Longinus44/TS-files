"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMethod = void 0;
class ThemeAcontrol {
    defaultMethod() {
        return {
            text: `you ve reached the ${this.constructor.name} default method`
        };
    }
}
exports.default = new ThemeAcontrol();
function defaultMethod() {
    throw new Error("Function not implemented.");
}
exports.defaultMethod = defaultMethod;
//# sourceMappingURL=ThemeAcontrol.js.map