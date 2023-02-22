const {encode, decode} = require('./encode&decode')

describe('teste 3', () => {
    test('verifique se encode é uma função', () => {
        expect((typeof encode)).toEqual('function')
    })

    test('verifique se decode é uma função', () => {
        expect((typeof decode)).toEqual('function')
    })

    test('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
        expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5')
    })

    test('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos em a, e, i, o, u', () => {
        expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u')
    })

    test('teste se a string retornada pelas funções tem o mesmo número de caracteres que o parametro', () => {
        expect(encode('aeiou').length).toEqual(5)
    })

    test('teste se a string retornada pelas funções tem o mesmo número de caracteres que o parametro', () => {
        expect(decode('aeiou').length).toEqual(5)
    })
})