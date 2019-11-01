import { Board } from '../board';
import { IBoardIndex } from '../board_index';
import { Discs } from '../discs';
export declare function getKilledDiscsList(board: Board, ourDisc: Discs.B | Discs.W, move: IBoardIndex, nextCell: (move: IBoardIndex) => IBoardIndex): IBoardIndex[];
export declare function updateBoard(board: Discs[][], ourDisc: Discs.B | Discs.W, move: IBoardIndex): Discs[][];
//# sourceMappingURL=index.d.ts.map