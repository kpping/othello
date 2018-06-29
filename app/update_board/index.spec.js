"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discs_1 = require("../discs");
const index_1 = require("./index");
const o = discs_1.Discs.o;
const B = discs_1.Discs.B;
const W = discs_1.Discs.W;
const board = [
    /*       0, 1, 2, 3, 4, 5, 6, 7*/
    /*0*/ [o, o, o, o, o, o, o, o],
    /*1*/ [o, o, o, o, o, o, o, o],
    /*2*/ [o, o, o, o, o, o, o, o],
    /*3*/ [o, o, o, B, W, o, o, o],
    /*4*/ [o, o, o, W, B, o, o, o],
    /*5*/ [o, o, o, o, o, o, o, o],
    /*6*/ [o, o, o, o, o, o, o, o],
    /*7*/ [o, o, o, o, o, o, o, o],
];
it('should flip W to B (B: 2, 4)', () => {
    const outcome = index_1.updateBoard(board, discs_1.Discs.B, [2, 4]);
    const expectedBoard = [
        /*       0, 1, 2, 3, 4, 5, 6, 7*/
        /*0*/ [o, o, o, o, o, o, o, o],
        /*1*/ [o, o, o, o, o, o, o, o],
        /*2*/ [o, o, o, o, B, o, o, o],
        /*3*/ [o, o, o, B, B, o, o, o],
        /*4*/ [o, o, o, W, B, o, o, o],
        /*5*/ [o, o, o, o, o, o, o, o],
        /*6*/ [o, o, o, o, o, o, o, o],
        /*7*/ [o, o, o, o, o, o, o, o],
    ];
    expect(outcome)
        .toEqual(expectedBoard);
});
it('should flip W to B (B: 4, 2)', () => {
    const outcome = index_1.updateBoard(board, discs_1.Discs.B, [4, 2]);
    const expectedBoard = [
        /*       0, 1, 2, 3, 4, 5, 6, 7*/
        /*0*/ [o, o, o, o, o, o, o, o],
        /*1*/ [o, o, o, o, o, o, o, o],
        /*2*/ [o, o, o, o, o, o, o, o],
        /*3*/ [o, o, o, B, W, o, o, o],
        /*4*/ [o, o, B, B, B, o, o, o],
        /*5*/ [o, o, o, o, o, o, o, o],
        /*6*/ [o, o, o, o, o, o, o, o],
        /*7*/ [o, o, o, o, o, o, o, o],
    ];
    expect(outcome)
        .toEqual(expectedBoard);
});
it('should flip W to B (B: 3, 5)', () => {
    const outcome = index_1.updateBoard(board, discs_1.Discs.B, [3, 5]);
    const expectedBoard = [
        /*       0, 1, 2, 3, 4, 5, 6, 7*/
        /*0*/ [o, o, o, o, o, o, o, o],
        /*1*/ [o, o, o, o, o, o, o, o],
        /*2*/ [o, o, o, o, o, o, o, o],
        /*3*/ [o, o, o, B, B, B, o, o],
        /*4*/ [o, o, o, W, B, o, o, o],
        /*5*/ [o, o, o, o, o, o, o, o],
        /*6*/ [o, o, o, o, o, o, o, o],
        /*7*/ [o, o, o, o, o, o, o, o],
    ];
    expect(outcome)
        .toEqual(expectedBoard);
});
it('should flip W to B (B: 5, 3)', () => {
    const outcome = index_1.updateBoard(board, discs_1.Discs.B, [5, 3]);
    const expectedBoard = [
        /*       0, 1, 2, 3, 4, 5, 6, 7*/
        /*0*/ [o, o, o, o, o, o, o, o],
        /*1*/ [o, o, o, o, o, o, o, o],
        /*2*/ [o, o, o, o, o, o, o, o],
        /*3*/ [o, o, o, B, W, o, o, o],
        /*4*/ [o, o, o, B, B, o, o, o],
        /*5*/ [o, o, o, B, o, o, o, o],
        /*6*/ [o, o, o, o, o, o, o, o],
        /*7*/ [o, o, o, o, o, o, o, o],
    ];
    expect(outcome)
        .toEqual(expectedBoard);
});
