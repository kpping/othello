"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const get_board_stat_1 = require("../get_board_stat");
const colorB = chalk.default.green;
const colorW = chalk.default.yellow;
function stringify(board) {
    const boardStat = get_board_stat_1.getBoardStat(board);
    return `${colorB('B')}: ${boardStat.black} ${colorW('W')}: ${boardStat.white} Free: ${boardStat.free}`;
}
exports.stringify = stringify;
function printBoardStat(board, writer = console.log) {
    const strBoardStat = stringify(board);
    writer(strBoardStat);
    return strBoardStat;
}
exports.printBoardStat = printBoardStat;
