import readline from 'node:readline'

export class TerminalController {
    constructor() {
        this.print = {}
    }

    initializeTerminal() {
        this.terminal = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    question(msg = '') {
        return new Promise(resolve => this.terminal.question(msg, resolve))
    }

    closeTerminal() {
        this.terminal.close()
    }
}