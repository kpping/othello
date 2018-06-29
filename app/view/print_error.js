"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
function printError(error, writer = console.error) {
    writer(chalk.default.red(error));
    return error;
}
exports.printError = printError;
