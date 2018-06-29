"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discs_1 = require("../discs");
function getBoardStat(board) {
    let bCount = 0;
    let wCount = 0;
    let oCount = 0;
    for (const row of board) {
        for (const cell of row) {
            if (cell === discs_1.Discs.B) {
                bCount += 1;
            }
            else if (cell === discs_1.Discs.W) {
                wCount += 1;
            }
            else {
                oCount += 1;
            }
        }
    }
    return { black: bCount, white: wCount, free: oCount };
}
exports.getBoardStat = getBoardStat;
