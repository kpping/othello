import promptSync = require('prompt-sync');

export function prompt(question: string) {
    return promptSync()(question);
}
