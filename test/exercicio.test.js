import {describe, it} from 'node:test'
import { Exercicios } from '../exercicios.js'
import { ExercicoResolvido02 } from '../exercicio02.js'

describe('Testes para os exercícios', () => {
    it('Subtração', () => {
        const ex  = new Exercicios()
        const result = ex.subtração(20, 10)
        const expected = 10
        console.assert(result, expected)
    })

    it('Multiplicação', () => { 
        const ex = new Exercicios()
        const result = ex.multiplicação(3, 4, 3)
        const expected = 36
        console.assert(result, expected)
    })
    it('Divisão', () => { 
        const ex = new Exercicios()
        const result = ex.divisão(25, 5)
        const expected = 5 
        console.assert(result, expected)
    })

    it(' Média ponderada', () => {
        const ex = new Exercicios()
        const result = ex.médiaPonderada(4, 8)
        const expected = 6.4
        console.assert(result, expected)
    })

    it('Desconto de 10%', () => {
        const ex = new Exercicios()
        const result = ex.descount(100)
        const expected = 90
        console.assert(result, expected)        

    })

    it('Calcula salário final', () => {
        const ex = new Exercicios()
        const result = ex.finalSalary(1000, 100)
        const expected = 1004
        console.assert(result, expected)
    })

    it('Calcula novos pesos', () => {
        const ex = new Exercicios()
        const result = ex.finalweight(55)
        const expected1 = 63.25
        console.assert(result[0], expected1)

        const expected2 = 44
        console.log('Resultado: ', result)
        console.assert(result[1],  expected2)
    })

    it('Calcula peso em grmas', () => {
        const ex = new Exercicios()
        const result = ex.weightingrams(55)
        const expected = 55000
        console.assert(result, expected)
    })
    
})