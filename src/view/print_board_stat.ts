import * as chalk from 'chalk';
import { Board } from '../board';
import { getBoardStat } from '../get_board_stat';

const colorB = chalk.default.green;
const colorW = chalk.default.yellow;

export function stringify(board: Board) {
    const boardStat = getBoardStat(board);

    return `${colorB('B')}: ${boardStat.black} ${colorW('W')}: ${boardStat.white} Free: ${boardStat.free}`;
}

export function printBoardStat(board: Board, writer = console.log) {
    const strBoardStat = stringify(board);

    writer(strBoardStat);

    return strBoardStat;
}
