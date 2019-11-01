import { IBoardIndex } from '../board_index';
import { Discs } from '../discs';

export type Board = Discs[][];

export function xNW(cell: IBoardIndex): IBoardIndex {
    return [cell[0] - 1, cell[1] - 1];
}

export function xN(cell: IBoardIndex): IBoardIndex {
    return [cell[0] - 1, cell[1]];
}

export function xNE(cell: IBoardIndex): IBoardIndex {
    return [cell[0] - 1, cell[1] + 1];
}

export function xW(cell: IBoardIndex): IBoardIndex {
    return [cell[0], cell[1] - 1];
}

export function xE(cell: IBoardIndex): IBoardIndex {
    return [cell[0], cell[1] + 1];
}

export function xSW(cell: IBoardIndex): IBoardIndex {
    return [cell[0] + 1, cell[1] - 1];
}

export function xS(cell: IBoardIndex): IBoardIndex {
    return [cell[0] + 1, cell[1]];
}

export function xSE(cell: IBoardIndex): IBoardIndex {
    return [cell[0] + 1, cell[1] + 1];
}

export function inBoard(cell: IBoardIndex) {
    return cell[0] >= 0 && cell[0] <= 7 && cell[1] >= 0 && cell[1] <= 7;
}

export const EIGHT_DIRECTION_LIST = [xNW, xN, xNE, xW, xE, xSW, xS, xSE];

export function isEmptyCell(board: Board, move: IBoardIndex) {
    return board[move[0]][move[1]] === Discs.o;
}
