import { Board } from '../board';
import { IBoardIndex } from '../board_index';
import { Discs } from '../discs';
import { isValidMove } from '../is_valid_move';

export function getMovableList(board: Board, ourDisc: Discs.B | Discs.W): IBoardIndex[] {
    const movableList: IBoardIndex[] = [];

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            const move: IBoardIndex = [r, c];

            if (isValidMove(board, ourDisc, move)) {
                movableList.push(move);
            }
        }
    }

    return movableList;
}
