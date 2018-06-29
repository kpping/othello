import { Board } from '../board';
import { copyBoard } from '../copy_board';
import { Discs } from '../discs';

/*     0, 1, 2, 3, 4, 5, 6, 7
/*0   [o, o, o, o, o, o, o, o],
/*1   [o, o, o, o, o, o, o, o],
/*2   [o, o, o, o, o, o, o, o],
/*3   [o, o, o, B, W, o, o, o],
/*4   [o, o, o, W, B, o, o, o],
/*5   [o, o, o, o, o, o, o, o],
/*6   [o, o, o, o, o, o, o, o],
/*7   [o, o, o, o, o, o, o, o],
*/

export function setNewGame(board: Board) {
    const newBoard = copyBoard(board);

    newBoard[3][3] = Discs.W;
    newBoard[3][4] = Discs.B;
    newBoard[4][3] = Discs.B;
    newBoard[4][4] = Discs.W;

    return newBoard;
}
