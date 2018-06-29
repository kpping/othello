import chalk = require('chalk');
import { Discs } from '../discs';

const colorB = chalk.default.green;
const colorW = chalk.default.yellow;

export function stringify(turn: Discs.B | Discs.W) {
    if (turn === Discs.B) {
        return colorB('B');
    }

    return colorW('W');
}

export function printTurn(turn: Discs.B | Discs.W, writer = console.log) {
    const strTurn = stringify(turn);

    writer(`Turn: ${strTurn}`);

    return strTurn;
}
