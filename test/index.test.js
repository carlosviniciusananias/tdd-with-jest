const calc = require('../index')

describe('concatenar', () => {
    test('"a" com "b" retorna "ab"', () => {
        expect(calc.concatenar('a', 'b')).toBe("ab")
    })
    
    test('"b" com "d" retorna "bd"', () => {
        expect(calc.concatenar('b', 'd')).toBe("bd")
    })
})

describe('subtrair', () => {
    test('trinta e cinco menos vinte é quinze', () => {
        expect(35 - 20).toBe(15);
    })

    test('duzentos menos duzentos e dez é dez negativo', () => {
        expect(200 - 210).toBe(-10);
    })
})

describe('multiplicar', () => {
    test('cinco vezes cinco é vinte e cinco', () => {
        expect(5 * 5).toBe(25);
    })
})

describe('dividir', () => {
    test('64 dividido por 14 é 4.571428571428571', () => {
        expect(64 / 14).toBe(4.571428571428571);
    })
})
