"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("../board");
function getPossibleDirectionList(board, opponentDisc, move) {
    const directionList = board_1.EIGHT_DIRECTION_LIST.filter((nextCell) => {
        const cell = nextCell(move);
        return board_1.inBoard(cell) && board[cell[0]][cell[1]] === opponentDisc;
    });
    return directionList;
}
exports.getPossibleDirectionList = getPossibleDirectionList;
