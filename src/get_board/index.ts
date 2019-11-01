import { Board } from '../board';
import { Discs } from '../discs';

export function getBoard(): Board {
    const o = Discs.o;

    return [
        /*       0, 1, 2, 3, 4, 5, 6, 7*/
        /*0*/ [o, o, o, o, o, o, o, o],
        /*1*/ [o, o, o, o, o, o, o, o],
        /*2*/ [o, o, o, o, o, o, o, o],
        /*3*/ [o, o, o, o, o, o, o, o],
        /*4*/ [o, o, o, o, o, o, o, o],
        /*5*/ [o, o, o, o, o, o, o, o],
        /*6*/ [o, o, o, o, o, o, o, o],
        /*7*/ [o, o, o, o, o, o, o, o],
    ];
}
