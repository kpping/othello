import { Board } from '../board';
import { Discs } from '../discs';
import { isValidMove } from './index';

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

it('should return true (B move 2,4)', () => {
    const result = isValidMove(board, B, [2, 4]);

    expect(result)
        .toBe(true);
});

it('should return true (B move 3,5)', () => {
    const result = isValidMove(board, B, [3, 5]);

    expect(result)
        .toBe(true);
});

it('should return true (B move 4,2)', () => {
    const result = isValidMove(board, B, [4, 2]);

    expect(result)
        .toBe(true);
});

it('should return true (B move 5,3)', () => {
    const result = isValidMove(board, B, [5, 3]);

    expect(result)
        .toBe(true);
});

it('should return false (B move 0, 0)', () => {
    const result = isValidMove(board, B, [0, 0]);

    expect(result)
        .toBe(false);
});

it('should return false (B move 2, 2)', () => {
    const result = isValidMove(board, B, [2, 2]);

    expect(result)
        .toBe(false);
});

it('should return false (B move 2, 3)', () => {
    const result = isValidMove(board, B, [2, 3]);

    expect(result)
        .toBe(false);
});

it('should return false (B move 3, 2)', () => {
    const result = isValidMove(board, B, [3, 2]);

    expect(result)
        .toBe(false);
});

it('should return false (B move 3, 3)', () => {
    const result = isValidMove(board, B, [3, 3]);

    expect(result)
        .toBe(false);
});

it('should return false (B move 3, 4)', () => {
    const result = isValidMove(board, B, [3, 4]);

    expect(result)
        .toBe(false);
});
