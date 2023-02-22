const myFizzBuzz = require('./myFizzBuzz')

describe('teste 2', () => {
    test('A função myFizzBuzz retorna "fizzbuzz" caso o parametro seja divisível por 3 e 5.', () => {
        expect(myFizzBuzz(15)).toBe("fizzbuzz")
    })

    test('A função myFizzBuzz retorna "fizz" caso o parametro seja divisível por 3.', () => {
        expect(myFizzBuzz(3)).toBe("fizz")
    })

    test('A função myFizzBuzz retorna "buzz" caso o parametro seja divisível por 5.', () => {
        expect(myFizzBuzz(5)).toBe("buzz")
    })

    test('A função myFizzBuzz retorna o próprio parametro caso ele não seja divisível por 3 e por 5.', () => {
        expect(myFizzBuzz(1)).toBe(1)
    })

    test('A função myFizzBuzz retorna false caso o parametro não seja um número.', () => {
        expect(myFizzBuzz('false')).toBe(false)
    })
})