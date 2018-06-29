import { Discs } from '../discs';
import { getBoard } from '../get_board';
import { copyBoard } from './index';

it('should copy (not referenced)', () => {
    const board = getBoard();

    const copiedBoard = copyBoard(board);

    board[0][0] = Discs.B;
    copiedBoard[0][0] = Discs.W;

    expect(board[0][0])
        .toBe(Discs.B);

    expect(copiedBoard[0][0])
        .toBe(Discs.W);
});
