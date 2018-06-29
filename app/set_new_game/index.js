"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const copy_board_1 = require("../copy_board");
const discs_1 = require("../discs");
/*     0, 1, 2, 3, 4, 5, 6, 7
/*0   [o, o, o, o, o, o, o, o],
/*1   [o, o, o, o, o, o, o, o],
/*2   [o, o, o, o, o, o, o, o],
/*3   [o, o, o, B, W, o, o, o],
/*4   [o, o, o, W, B, o, o, o],
/*5   [o, o, o, o, o, o, o, o],
/*6   [o, o, o, o, o, o, o, o],
/*7   [o, o, o, o, o, o, o, o],
*/
function setNewGame(board) {
    const newBoard = copy_board_1.copyBoard(board);
    newBoard[3][3] = discs_1.Discs.W;
    newBoard[3][4] = discs_1.Discs.B;
    newBoard[4][3] = discs_1.Discs.B;
    newBoard[4][4] = discs_1.Discs.W;
    return newBoard;
}
exports.setNewGame = setNewGame;
