import { Board } from '../board';
import { IBoardIndex } from '../board_index';
import { Discs } from '../discs';
export declare function isOurDiscInOtherSide(board: Board, ourDisc: Discs.B | Discs.W, move: IBoardIndex, nextCell: (move: IBoardIndex) => IBoardIndex): boolean;
export declare function isValidMove(board: Board, ourDisc: Discs.B | Discs.W, move: IBoardIndex): boolean;
//# sourceMappingURL=index.d.ts.map