import { Board, EIGHT_DIRECTION_LIST, inBoard } from '../board';
import { IBoardIndex } from '../board_index';
import { Discs } from '../discs';

export function getPossibleDirectionList(board: Board, opponentDisc: Discs.B | Discs.W, move: IBoardIndex) {
    const directionList = EIGHT_DIRECTION_LIST.filter((nextCell) => {
        const cell = nextCell(move);

        return inBoard(cell) && board[cell[0]][cell[1]] === opponentDisc;
    });

    return directionList;
}
