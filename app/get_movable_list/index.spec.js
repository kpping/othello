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
it('should return movable list of B', () => {
    expect(index_1.getMovableList(board, B))
        .toEqual([
        [2, 4],
        [3, 5],
        [4, 2],
        [5, 3],
    ]);
});
it('should return movable list of W', () => {
    expect(index_1.getMovableList(board, W))
        .toEqual([
        [2, 3],
        [3, 2],
        [4, 5],
        [5, 4],
    ]);
});
