"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = __importStar(require("chalk"));
const discs_1 = require("../discs");
const colorB = chalk.default.green;
const colorW = chalk.default.yellow;
function stringify(turn) {
    if (turn === discs_1.Discs.B) {
        return colorB('B');
    }
    return colorW('W');
}
exports.stringify = stringify;
function printTurn(turn, writer = console.log) {
    const strTurn = stringify(turn);
    writer(`Turn: ${strTurn}`);
    return strTurn;
}
exports.printTurn = printTurn;
//# sourceMappingURL=print_turn.js.map