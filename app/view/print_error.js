"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
function printRed(str, writer = console.log) {
    writer(chalk.default.red(str));
    return str;
}
exports.printRed = printRed;
function printError(error, writer = console.error) {
    return printRed(error, writer);
}
exports.printError = printError;
