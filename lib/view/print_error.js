"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = __importStar(require("chalk"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function printRed(str, writer = console.log) {
    writer(chalk.default.red(str));
    return str;
}
exports.printRed = printRed;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function printError(error, writer = console.error) {
    return printRed(error, writer);
}
exports.printError = printError;
//# sourceMappingURL=print_error.js.map