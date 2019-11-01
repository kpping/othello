import { Board } from '../board';
import { Discs } from '../discs';

export function getBoardStat(board: Board) {
    let bCount = 0;
    let wCount = 0;
    let oCount = 0;

    for (const row of board) {
        for (const cell of row) {
            if (cell === Discs.B) {
                bCount += 1;
            } else if (cell === Discs.W) {
                wCount += 1;
            } else {
                oCount += 1;
            }
        }
    }

    return { black: bCount, white: wCount, free: oCount };
}
