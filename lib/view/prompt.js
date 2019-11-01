"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
function prompt(question) {
    return promptSync()(question);
}
exports.prompt = prompt;
//# sourceMappingURL=prompt.js.map