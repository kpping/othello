import { Board, inBoard } from '../board';
import { IBoardIndex } from '../board_index';
import { copyBoard } from '../copy_board';
import { Discs } from '../discs';
import { getPossibleDirectionList } from '../get_possible_direction_list';

export function getKilledDiscsList(
    board: Board,
    ourDisc: Discs.B | Discs.W,
    move: IBoardIndex,
    nextCell: (move: IBoardIndex) => IBoardIndex,
) {
    const killedDiscsList: IBoardIndex[] = [];

    let cell = nextCell(move);

    while (inBoard(cell)) {
        if (board[cell[0]][cell[1]] === Discs.o) {
            return [];
        }

        killedDiscsList.push(cell);

        if (board[cell[0]][cell[1]] === ourDisc) {
            return killedDiscsList;
        }

        cell = nextCell(cell);
    }

    return [];
}

export function updateBoard(board: Discs[][], ourDisc: Discs.B | Discs.W, move: IBoardIndex) {
    const opponentDisc = ourDisc === Discs.B ? Discs.W : Discs.B;

    const directionList = getPossibleDirectionList(board, opponentDisc, move);

    const reducer = (accum: IBoardIndex[], nextCell: (move: IBoardIndex) => IBoardIndex) => {
        const result = getKilledDiscsList(board, ourDisc, move, nextCell);

        return accum.concat(result);
    };

    const ourDiscsList = directionList.reduce(reducer, [move]);

    const outcome = copyBoard(board);

    ourDiscsList.forEach((cell) => {
        outcome[cell[0]][cell[1]] = ourDisc;
    });

    return outcome;
}
