"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_valid_move_1 = require("../is_valid_move");
function getMovableList(board, ourDisc) {
    const movableList = [];
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            const move = [r, c];
            if (is_valid_move_1.isValidMove(board, ourDisc, move)) {
                movableList.push(move);
            }
        }
    }
    return movableList;
}
exports.getMovableList = getMovableList;
