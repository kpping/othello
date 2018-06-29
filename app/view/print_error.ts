import chalk = require('chalk');

export function printRed(str: any, writer = console.log) {
    writer(chalk.default.red(str));

    return str;
}

export function printError(error: any, writer = console.error) {
    return printRed(error, writer);
}
