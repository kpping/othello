"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
it('should get board 8x8', () => {
    const board = index_1.getBoard();
    // 8 rows
    expect(board)
        .toHaveLength(8);
    board.forEach((row) => {
        // 8 columns
        expect(row)
            .toHaveLength(8);
    });
});
