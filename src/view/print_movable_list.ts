import { IBoardIndex } from '../board_index';

export function stringify(movableList: IBoardIndex[]) {
    const reducer = (accum: string, current: IBoardIndex) => {
        const r = current[0];
        const c = current[1];

        return `${accum}  ${r},${c}`.trim();
    };

    return movableList.reduce(reducer, '');
}

export function printMovableList(movableList: IBoardIndex[], writer = console.log) {
    const strMovableList = stringify(movableList);

    writer(`Possible Move: ${strMovableList}`);

    return strMovableList;
}
