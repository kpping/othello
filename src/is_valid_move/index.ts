import { Board, inBoard, isEmptyCell } from '../board';
import { IBoardIndex } from '../board_index';
import { Discs } from '../discs';
import { getPossibleDirectionList } from '../get_possible_direction_list';

export function isOurDiscInOtherSide(
    board: Board,
    ourDisc: Discs.B | Discs.W,
    move: IBoardIndex,
    nextCell: (move: IBoardIndex) => IBoardIndex,
) {
    let cell = nextCell(move);

    while (inBoard(cell)) {
        if (board[cell[0]][cell[1]] === Discs.o) {
            return false;
        }

        if (board[cell[0]][cell[1]] === ourDisc) {
            return true;
        }

        cell = nextCell(cell);
    }

    return false;
}

export function isValidMove(board: Board, ourDisc: Discs.B | Discs.W, move: IBoardIndex) {
    if (!isEmptyCell(board, move)) {
        return false;
    }

    const opponentDisc = ourDisc === Discs.B ? Discs.W : Discs.B;

    const directionList = getPossibleDirectionList(board, opponentDisc, move);

    for (const nextCell of directionList) {
        if (isOurDiscInOtherSide(board, ourDisc, move, nextCell)) {
            return true;
        }
    }

    return false;
}
