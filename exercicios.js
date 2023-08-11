export class Exercicios{
    subtração(nota1, nota2){
        const subtração = Number(nota1) - Number(nota2)
        return subtração
    }


    multiplicação(num1, num2, num3){
        const multiplicação = Number(num1) * Number(num2) * Number(num3)
        return multiplicação
    }

    divisão(num1, num2){
        const divisão = Number(num1)/ Number(num2)
        return divisão 
    }

    médiaPonderada(nota1, nota2){
        const soma = (2 * Number(nota1)) + (3 * Number(nota2))
        const média = this.divisão(soma, 5)
        return média 
    }

    descount(price1){
        const value = (Number(price1) * 0.9)
        return value 
    }

    finalSalary(salary, amount){
        const bonus = (Number(amount) * 0.04)
        return salary + bonus 
    }

    finalweight(weight){
        const finalweight = []
        const weight1 = (Number(weight) * 1.15)
        finalweight.push(weight1)
        const weight2 = (Number(weight) * 0.8)
        finalweight.push(weight2)
        return finalweight
    }

    weightingrams(wieght){ 
        const weightingrams = (Number(wieght) * 1000)
        return weightingrams
    }
}





