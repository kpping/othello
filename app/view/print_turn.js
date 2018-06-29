"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const discs_1 = require("../discs");
const colorB = chalk.default.green;
const colorW = chalk.default.yellow;
function stringify(turn) {
    if (turn === discs_1.Discs.B) {
        return colorB('B');
    }
    return colorW('W');
}
exports.stringify = stringify;
function printTurn(turn, writer = console.log) {
    const strTurn = stringify(turn);
    writer(`Turn: ${strTurn}`);
    return strTurn;
}
exports.printTurn = printTurn;
