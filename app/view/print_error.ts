import chalk = require('chalk');

export function printError(error: any, writer = console.error) {
    writer(chalk.default.red(error));

    return error;
}
