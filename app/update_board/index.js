"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("../board");
const copy_board_1 = require("../copy_board");
const discs_1 = require("../discs");
const get_possible_direction_list_1 = require("../get_possible_direction_list");
function getKilledDiscsList(board, ourDisc, move, nextCell) {
    const killedDiscsList = [];
    let cell = nextCell(move);
    while (board_1.inBoard(cell)) {
        if (board[cell[0]][cell[1]] === discs_1.Discs.o) {
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
exports.getKilledDiscsList = getKilledDiscsList;
function updateBoard(board, ourDisc, move) {
    const opponentDisc = ourDisc === discs_1.Discs.B ? discs_1.Discs.W : discs_1.Discs.B;
    const directionList = get_possible_direction_list_1.getPossibleDirectionList(board, opponentDisc, move);
    const reducer = (accum, nextCell) => {
        const result = getKilledDiscsList(board, ourDisc, move, nextCell);
        return accum.concat(result);
    };
    const ourDiscsList = directionList.reduce(reducer, [move]);
    const outcome = copy_board_1.copyBoard(board);
    ourDiscsList.forEach((cell) => {
        outcome[cell[0]][cell[1]] = ourDisc;
    });
    return outcome;
}
exports.updateBoard = updateBoard;
