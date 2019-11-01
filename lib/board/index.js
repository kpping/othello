"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discs_1 = require("../discs");
function xNW(cell) {
    return [cell[0] - 1, cell[1] - 1];
}
exports.xNW = xNW;
function xN(cell) {
    return [cell[0] - 1, cell[1]];
}
exports.xN = xN;
function xNE(cell) {
    return [cell[0] - 1, cell[1] + 1];
}
exports.xNE = xNE;
function xW(cell) {
    return [cell[0], cell[1] - 1];
}
exports.xW = xW;
function xE(cell) {
    return [cell[0], cell[1] + 1];
}
exports.xE = xE;
function xSW(cell) {
    return [cell[0] + 1, cell[1] - 1];
}
exports.xSW = xSW;
function xS(cell) {
    return [cell[0] + 1, cell[1]];
}
exports.xS = xS;
function xSE(cell) {
    return [cell[0] + 1, cell[1] + 1];
}
exports.xSE = xSE;
function inBoard(cell) {
    return cell[0] >= 0 && cell[0] <= 7 && cell[1] >= 0 && cell[1] <= 7;
}
exports.inBoard = inBoard;
exports.EIGHT_DIRECTION_LIST = [xNW, xN, xNE, xW, xE, xSW, xS, xSE];
function isEmptyCell(board, move) {
    return board[move[0]][move[1]] === discs_1.Discs.o;
}
exports.isEmptyCell = isEmptyCell;
//# sourceMappingURL=index.js.map