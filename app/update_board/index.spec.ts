import { Board } from '../board';
import { Discs } from '../discs';
import { updateBoard } from './index';

const o = Discs.o;
const B = Discs.B;
const W = Discs.W;

const board: Board = [
/*       0, 1, 2, 3, 4, 5, 6, 7*/
/*0*/   [o, o, o, o, o, o, o, o],
/*1*/   [o, o, o, o, o, o, o, o],
/*2*/   [o, o, o, o, o, o, o, o],
/*3*/   [o, o, o, B, W, o, o, o],
/*4*/   [o, o, o, W, B, o, o, o],
/*5*/   [o, o, o, o, o, o, o, o],
/*6*/   [o, o, o, o, o, o, o, o],
/*7*/   [o, o, o, o, o, o, o, o],
];

it('should flip W to B (B: 2, 4)', () => {
    const outcome = updateBoard(board, Discs.B, [2, 4]);

    const expectedBoard: Board = [
    /*       0, 1, 2, 3, 4, 5, 6, 7*/
    /*0*/   [o, o, o, o, o, o, o, o],
    /*1*/   [o, o, o, o, o, o, o, o],
    /*2*/   [o, o, o, o, B, o, o, o],
    /*3*/   [o, o, o, B, B, o, o, o],
    /*4*/   [o, o, o, W, B, o, o, o],
    /*5*/   [o, o, o, o, o, o, o, o],
    /*6*/   [o, o, o, o, o, o, o, o],
    /*7*/   [o, o, o, o, o, o, o, o],
    ];

    expect(outcome)
        .toEqual(expectedBoard);
});

it('should flip W to B (B: 4, 2)', () => {
    const outcome = updateBoard(board, Discs.B, [4, 2]);

    const expectedBoard: Board = [
    /*       0, 1, 2, 3, 4, 5, 6, 7*/
    /*0*/   [o, o, o, o, o, o, o, o],
    /*1*/   [o, o, o, o, o, o, o, o],
    /*2*/   [o, o, o, o, o, o, o, o],
    /*3*/   [o, o, o, B, W, o, o, o],
    /*4*/   [o, o, B, B, B, o, o, o],
    /*5*/   [o, o, o, o, o, o, o, o],
    /*6*/   [o, o, o, o, o, o, o, o],
    /*7*/   [o, o, o, o, o, o, o, o],
    ];

    expect(outcome)
        .toEqual(expectedBoard);
});

it('should flip W to B (B: 3, 5)', () => {
    const outcome = updateBoard(board, Discs.B, [3, 5]);

    const expectedBoard: Board = [
    /*       0, 1, 2, 3, 4, 5, 6, 7*/
    /*0*/   [o, o, o, o, o, o, o, o],
    /*1*/   [o, o, o, o, o, o, o, o],
    /*2*/   [o, o, o, o, o, o, o, o],
    /*3*/   [o, o, o, B, B, B, o, o],
    /*4*/   [o, o, o, W, B, o, o, o],
    /*5*/   [o, o, o, o, o, o, o, o],
    /*6*/   [o, o, o, o, o, o, o, o],
    /*7*/   [o, o, o, o, o, o, o, o],
    ];

    expect(outcome)
        .toEqual(expectedBoard);
});

it('should flip W to B (B: 5, 3)', () => {
    const outcome = updateBoard(board, Discs.B, [5, 3]);

    const expectedBoard: Board = [
    /*       0, 1, 2, 3, 4, 5, 6, 7*/
    /*0*/   [o, o, o, o, o, o, o, o],
    /*1*/   [o, o, o, o, o, o, o, o],
    /*2*/   [o, o, o, o, o, o, o, o],
    /*3*/   [o, o, o, B, W, o, o, o],
    /*4*/   [o, o, o, B, B, o, o, o],
    /*5*/   [o, o, o, B, o, o, o, o],
    /*6*/   [o, o, o, o, o, o, o, o],
    /*7*/   [o, o, o, o, o, o, o, o],
    ];

    expect(outcome)
        .toEqual(expectedBoard);
});
