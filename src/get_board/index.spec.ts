import { getBoard } from './index';

it('should get board 8x8', () => {
    const board = getBoard();

    // 8 rows
    expect(board).toHaveLength(8);

    board.forEach((row) => {
        // 8 columns
        expect(row).toHaveLength(8);
    });
});
