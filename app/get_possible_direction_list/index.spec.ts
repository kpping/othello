import { Board } from '../board';
import { Discs } from '../discs';
import { getPossibleDirectionList } from './index';

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

it('should return 1 directions', () => {
    const result = getPossibleDirectionList(board, W, [2, 4]);

    expect(result)
        .toHaveLength(1);
});
