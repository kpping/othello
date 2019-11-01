import { Board } from '../board';
import { Discs } from '../discs';
import { getMovableList } from './index';

const o = Discs.o;
const B = Discs.B;
const W = Discs.W;

const board: Board = [
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
    expect(getMovableList(board, B)).toEqual([[2, 4], [3, 5], [4, 2], [5, 3]]);
});

it('should return movable list of W', () => {
    expect(getMovableList(board, W)).toEqual([[2, 3], [3, 2], [4, 5], [5, 4]]);
});
