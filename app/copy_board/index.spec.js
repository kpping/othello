"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discs_1 = require("../discs");
const get_board_1 = require("../get_board");
const index_1 = require("./index");
it('should copy (not referenced)', () => {
    const board = get_board_1.getBoard();
    const copiedBoard = index_1.copyBoard(board);
    board[0][0] = discs_1.Discs.B;
    copiedBoard[0][0] = discs_1.Discs.W;
    expect(board[0][0])
        .toBe(discs_1.Discs.B);
    expect(copiedBoard[0][0])
        .toBe(discs_1.Discs.W);
});
