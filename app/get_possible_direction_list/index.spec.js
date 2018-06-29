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
it('should return 1 directions', () => {
    const result = index_1.getPossibleDirectionList(board, W, [2, 4]);
    expect(result)
        .toHaveLength(1);
});
