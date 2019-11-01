import * as chalk from 'chalk';
import { Board } from '../board';
import { Discs } from '../discs';

const colorB = chalk.default.green;
const colorW = chalk.default.yellow;
const colorO = chalk.default.grey;

export function mapDiscsIntoStr(discs: Discs) {
    switch (discs) {
        case Discs.B: {
            return `${colorB('B')}`;
        }
        case Discs.W: {
            return `${colorW('W')}`;
        }
        default: {
            return `${colorO('•')}`;
        }
    }
}

export function stringify(board: Board) {
    return [
        ['\u0020', '0', '1', '2', '3', '4', '5', '6', '7'].join('\u0020'),
        ['0'].concat(board[0].map(mapDiscsIntoStr)).join('\u0020'),
        ['1'].concat(board[1].map(mapDiscsIntoStr)).join('\u0020'),
        ['2'].concat(board[2].map(mapDiscsIntoStr)).join('\u0020'),
        ['3'].concat(board[3].map(mapDiscsIntoStr)).join('\u0020'),
        ['4'].concat(board[4].map(mapDiscsIntoStr)).join('\u0020'),
        ['5'].concat(board[5].map(mapDiscsIntoStr)).join('\u0020'),
        ['6'].concat(board[6].map(mapDiscsIntoStr)).join('\u0020'),
        ['7'].concat(board[7].map(mapDiscsIntoStr)).join('\u0020'),
    ].join('\n');
}

export function printBoard(board: Board, writer = console.log) {
    const strBoard = stringify(board);

    writer(strBoard);

    return strBoard;
}
