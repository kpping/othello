import { IBoardIndex } from '../board_index';
import { Discs } from '../discs';
export declare type Board = Discs[][];
export declare function xNW(cell: IBoardIndex): IBoardIndex;
export declare function xN(cell: IBoardIndex): IBoardIndex;
export declare function xNE(cell: IBoardIndex): IBoardIndex;
export declare function xW(cell: IBoardIndex): IBoardIndex;
export declare function xE(cell: IBoardIndex): IBoardIndex;
export declare function xSW(cell: IBoardIndex): IBoardIndex;
export declare function xS(cell: IBoardIndex): IBoardIndex;
export declare function xSE(cell: IBoardIndex): IBoardIndex;
export declare function inBoard(cell: IBoardIndex): boolean;
export declare const EIGHT_DIRECTION_LIST: (typeof xNW)[];
export declare function isEmptyCell(board: Board, move: IBoardIndex): boolean;
//# sourceMappingURL=index.d.ts.map