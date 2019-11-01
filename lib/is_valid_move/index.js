"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("../board");
const discs_1 = require("../discs");
const get_possible_direction_list_1 = require("../get_possible_direction_list");
function isOurDiscInOtherSide(board, ourDisc, move, nextCell) {
    let cell = nextCell(move);
    while (board_1.inBoard(cell)) {
        if (board[cell[0]][cell[1]] === discs_1.Discs.o) {
            return false;
        }
        if (board[cell[0]][cell[1]] === ourDisc) {
            return true;
        }
        cell = nextCell(cell);
    }
    return false;
}
exports.isOurDiscInOtherSide = isOurDiscInOtherSide;
function isValidMove(board, ourDisc, move) {
    if (!board_1.isEmptyCell(board, move)) {
        return false;
    }
    const opponentDisc = ourDisc === discs_1.Discs.B ? discs_1.Discs.W : discs_1.Discs.B;
    const directionList = get_possible_direction_list_1.getPossibleDirectionList(board, opponentDisc, move);
    for (const nextCell of directionList) {
        if (isOurDiscInOtherSide(board, ourDisc, move, nextCell)) {
            return true;
        }
    }
    return false;
}
exports.isValidMove = isValidMove;
//# sourceMappingURL=index.js.map