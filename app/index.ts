import { Board } from './board';
import { IBoardIndex } from './board_index';
import { Discs } from './discs';
import { getBoard } from './get_board';
import { getMovableList } from './get_movable_list';
import { setNewGame } from './set_new_game';
import { updateBoard } from './update_board';

import {
    printBoard,
    printBoardStat,
    printError,
    printMovableList,
    printTurn,
    prompt,
} from './view';

function getNextTurn(currentTurn: Discs.B | Discs.W) {
    if (currentTurn === Discs.B) {
        return Discs.W;
    }

    return Discs.B;
}

function game(board: Board, turn: Discs.B | Discs.W, movableList: IBoardIndex[]) {
    printBoard(board);
    printBoardStat(board);
    printTurn(turn);
    printMovableList(movableList);

    const moveStr = prompt('Type your next move: ');
    const strList = moveStr.split(',');
    const r = parseInt(strList[0], 10);
    const c = parseInt(strList[1], 10);
    const isInMovableList = movableList.some((move) =>
        move[0] === r && move[1] === c);

    if (isInMovableList) {
        const nextBoard = updateBoard(board, turn, [r, c]);
        const nextTurn = getNextTurn(turn);

        return { nextBoard, nextTurn };
    } else {
        printError('\nINVALID MOVE\n');

        return { nextBoard: board, nextTurn: turn };
    }
}

function main() {
    let board = setNewGame(getBoard());
    let turn = Discs.B;
    let movableList = getMovableList(board, turn);

    while (movableList.length !== 0) {
        const { nextBoard, nextTurn } = game(board, turn, movableList);

        board = nextBoard;
        turn = nextTurn as Discs.B | Discs.W;
        movableList = getMovableList(board, turn);
    }

    printError('\nNO MORE MOVE\n');
    printBoard(board);
    printBoardStat(board);
}

main();
