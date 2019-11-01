import * as chalk from 'chalk';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function printRed(str: any, writer = console.log) {
    writer(chalk.default.red(str));

    return str;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function printError(error: any, writer = console.error) {
    return printRed(error, writer);
}
