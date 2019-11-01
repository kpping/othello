"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringify(movableList) {
    const reducer = (accum, current) => {
        const r = current[0];
        const c = current[1];
        return `${accum}  ${r},${c}`.trim();
    };
    return movableList.reduce(reducer, '');
}
exports.stringify = stringify;
function printMovableList(movableList, writer = console.log) {
    const strMovableList = stringify(movableList);
    writer(`Possible Move: ${strMovableList}`);
    return strMovableList;
}
exports.printMovableList = printMovableList;
//# sourceMappingURL=print_movable_list.js.map