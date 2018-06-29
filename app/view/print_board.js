"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const discs_1 = require("../discs");
const colorB = chalk.default.green;
const colorW = chalk.default.yellow;
const colorO = chalk.default.grey;
function mapDiscsIntoStr(discs) {
    switch (discs) {
        case discs_1.Discs.B: {
            return `${colorB('B')}`;
        }
        case discs_1.Discs.W: {
            return `${colorW('W')}`;
        }
        default: {
            return `${colorO('•')}`;
        }
    }
}
exports.mapDiscsIntoStr = mapDiscsIntoStr;
function stringify(board) {
    return [
        ['\u0020', '0', '1', '2', '3', '4', '5', '6', '7'].join('\u0020'),
        ['0'].concat(board[0].map(mapDiscsIntoStr)).join('\u0020'),
        ['1'].concat(board[1].map(mapDiscsIntoStr)).join('\u0020'),
        ['2'].concat(board[2].map(mapDiscsIntoStr)).join('\u0020'),
        ['3'].concat(board[3].map(mapDiscsIntoStr)).join('\u0020'),
        ['4'].concat(board[4].map(mapDiscsIntoStr)).join('\u0020'),
        ['5'].concat(board[5].map(mapDiscsIntoStr)).join('\u0020'),
        ['6'].concat(board[6].map(mapDiscsIntoStr)).join('\u0020'),
        ['7'].concat(board[7].map(mapDiscsIntoStr)).join('\u0020'),
    ].join('\n');
}
exports.stringify = stringify;
function printBoard(board, writer = console.log) {
    const strBoard = stringify(board);
    writer(strBoard);
    return strBoard;
}
exports.printBoard = printBoard;
