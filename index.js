import { ExercicoResolvido02 } from "./exercicio02.js";
import { Exercicios } from "./exercicios.js";
import { ExercicioResolvido01 } from "./exerciciosResolvidos/exercicio01.js";
import { TerminalController } from "./terminalController.js";

const terminalController = new TerminalController()
terminalController.initializeTerminal()

const STOP_TERM = ':q'

async function mainLoop(){
    const answer = await terminalController.question()
    if(answer ===  STOP_TERM){
        terminalController.closeTerminal()
        console.log('Process finished')
        return;
    } else if(answer === 'ex1'){
        const exercicioResolvido01 = new ExercicioResolvido01()
        const n1 = await terminalController.question("Digite o primeiro número: ")
        const n2 = await terminalController.question("Digite o segundo número: ")
        const n3 = await terminalController.question("Digite o terceiro número: ")
        const n4 = await terminalController.question("Digite o quarto número: ")
        const soma = exercicioResolvido01.soma(n1, Number(n2), Number(n3), Number(n4))
        console.log("Soma = ", soma)
        return terminalController.closeTerminal()
    }else if(answer === 'ex2'){
        const exercicioResolvido02 = new ExercicoResolvido02()
        const n1 = await terminalController.question("Digite a  primeira nota: ")
        const n2 = await terminalController.question("Digite a segunda nota: ")
        const n3 = await terminalController.question("Digite a terceira nota: ")
        const media = exercicioResolvido02 .media(n1, n2, n3)
        console.log("Media = ", media)
        return terminalController.closeTerminal()
    }else if(answer === 'ex01'){
        const exercicio01 = new Exercicios()
        const n1 = await terminalController.question("Digite o primeiro número")
        const n2 = await terminalController.question("Digite o segundo número")
        const sub = exercicio01.subtração(n1, n2)
        console.log(" Subtração = ", sub)
        return  terminalController.closeTerminal()
    }
    
    else {
        const n1 = await terminalController.question('Digite um número ')
        console.log("Número = ", n1)

    }
    return mainLoop()
}

await mainLoop()