import { isLeap } from "./leap-year";

describe('LeapYear', () => {
    test('isLeap should returns false when year is 2001', () => {
        // Act
        const year = 2001
        const expected = false
        // Arrange

        const result = isLeap(year)

        // Assert
        expect(result).toBe(expected)
    })

    test('isLeap should returns true when year is 1996', () => {
        // Act
        const year = 1996
        const expected = true

        // Arrange
        const result = isLeap(year)

        // Assert
        expect(result).toBe(expected)
    })

    test('isLeap should returns false when year is 1900',() => {
        // Act
        const year = 1900
        const expected = false

        // Arrange
        const result = isLeap(year)

        // Assert
        expect(result).toBe(expected)
    })

    test('isLeap should returns true when year is 2000',() => {
        // Act
        const year = 2000
        const expected = true

        // Arrange
        const result = isLeap(year)

        // Assert
        expect(result).toBe(expected)
    })

})
