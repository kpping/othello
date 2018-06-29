"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discs_1 = require("./discs");
const get_board_1 = require("./get_board");
const get_movable_list_1 = require("./get_movable_list");
const set_new_game_1 = require("./set_new_game");
const update_board_1 = require("./update_board");
const view_1 = require("./view");
function getNextTurn(currentTurn) {
    if (currentTurn === discs_1.Discs.B) {
        return discs_1.Discs.W;
    }
    return discs_1.Discs.B;
}
function game(board, turn, movableList) {
    view_1.printBoard(board);
    view_1.printNewLine();
    view_1.printBoardStat(board);
    view_1.printTurn(turn);
    view_1.printMovableList(movableList);
    const moveStr = view_1.prompt('Type your next move: ');
    const strList = moveStr.split(',');
    const r = parseInt(strList[0], 10);
    const c = parseInt(strList[1], 10);
    const isInMovableList = movableList.some((move) => move[0] === r && move[1] === c);
    if (isInMovableList) {
        const nextBoard = update_board_1.updateBoard(board, turn, [r, c]);
        const nextTurn = getNextTurn(turn);
        return { nextBoard, nextTurn };
    }
    else {
        view_1.printError('INVALID MOVE');
        return { nextBoard: board, nextTurn: turn };
    }
}
function main() {
    view_1.printNewLine();
    let board = set_new_game_1.setNewGame(get_board_1.getBoard());
    let turn = discs_1.Discs.B;
    let movableList = get_movable_list_1.getMovableList(board, turn);
    while (movableList.length !== 0) {
        const { nextBoard, nextTurn } = game(board, turn, movableList);
        board = nextBoard;
        turn = nextTurn;
        movableList = get_movable_list_1.getMovableList(board, turn);
        // pass turn
        if (movableList.length === 0) {
            view_1.printNewLine();
            view_1.printRed('😝 SKIP 😝');
            turn = getNextTurn(turn);
            movableList = get_movable_list_1.getMovableList(board, turn);
        }
        view_1.printNewLine();
    }
    view_1.printRed('🎉 NO MORE MOVE 🎉');
    view_1.printNewLine();
    view_1.printBoard(board);
    view_1.printNewLine();
    view_1.printBoardStat(board);
    view_1.printNewLine();
}
main();
