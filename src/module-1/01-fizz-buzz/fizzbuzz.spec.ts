import { fizzBuzz } from "./fizzbuzz";

describe('FizzBuzz', () => {
    test('should return 1 when 1 as input',() => {
        // Act // les données de départ
        const input = 1
        const expectedResult = 1

        // Arrange // on effectue une mutation
        const result = fizzBuzz(input)

        // Assert // on test le resultat
        expect(result).toBe(expectedResult)
    })

    test('should return 2 when 2 as input',() => {
        // Act
        const inputNumber = 2
        const expected = 2

        // Arrange
        const result = fizzBuzz(inputNumber)

        // Assert
        expect(result).toBe(expected)
    })

    test('should return Fizz when 3 as input', () => {
        // Act
        const inputNumber = 3
        const expected = 'Fizz'

        // Arrange
        const result = fizzBuzz(inputNumber)

        // Assert
        expect(result).toBe(expected)
    })

    test('should return 4 when 4 as input', () => {
        // Act
        const inputNumber = 4
        const expected = 4

        // Arrange
        const result = fizzBuzz(inputNumber)

        // Assert
        expect(result).toBe(expected)
    })

    test('should return Buzz when 5 as input', () => {
        // Act
        const inputNumber = 5
        const expected = 'Buzz'
        // Arrange
        const result = fizzBuzz(5)

        // Assert
        expect(result).toBe(expected)
    })

    test('should return Fizz when input 12, a multiple of 3', () => {
        // Act
        const inputNumber = 12
        const expected = 'Fizz'

        // Arrange
        const result = fizzBuzz(inputNumber)

        // Assert
        expect(result).toBe(expected)
    })

    test('should return Buzz when input 25, a multiple of 5', () => {
        const inputNumber = 25
        const expected = 'Buzz'

        const result = fizzBuzz(inputNumber)

        expect(result).toBe(expected)
    })

    test('should return FizzBuzz when input 15 is a multiple of 3 and 5',() => {
        const inputNumber = 15
        const expected = 'FizzBuzz'

        const result = fizzBuzz(inputNumber)

        expect(result).toBe(expected)
    })

    test('should return FizzBuzz when input 30 is a multiple of 3 and 5',() => {
        const inputNumber = 30
        const expected = 'FizzBuzz'

        const result = fizzBuzz(inputNumber)

        expect(result).toBe(expected)
    })

    test('should return Buzz when input 50, a multiple of 5', () => {
        const inputNumber = 50
        const expected = 'Buzz'

        const result = fizzBuzz(inputNumber)

        expect(result).toBe(expected)
    })

    test('should return 77 when 77 as input',() => {
        // Act
        const inputNumber = 77
        const expected = 77

        // Arrange
        const result = fizzBuzz(inputNumber)

        // Assert
        expect(result).toBe(expected)
    })


})
