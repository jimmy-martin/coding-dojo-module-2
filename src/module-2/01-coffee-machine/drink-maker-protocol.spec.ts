import {DrinkMakerProtocol} from './drink-maker-protocol'
import {DrinkOrder} from "./drink/drink-order";
import {Tea} from "./drink/tea";
import {Chocolate} from "./drink/chocolate";
import {Coffee} from "./drink/coffee";
import {OrangeJuice} from "./drink/orange-juice";
import {HotCoffee} from "./drink/hot-drink/hot-coffee";
import {HotChocolate} from "./drink/hot-drink/hot-chocolate";
import {HotTea} from "./drink/hot-drink/hot-tea";

describe('DrinkMakerProtocol', () => {
    test('should return "T:1:0" when Tea is ordered with one sugar', () => {
        const order = new DrinkOrder(new Tea(1))
        const expectedCommand = "T:1:0"

        const drinkMakerProtocol = new DrinkMakerProtocol()
        const command = drinkMakerProtocol.buildCommand(order)

        expect(command).toBe(expectedCommand)
    })

    test('should return "H::" when Chocolate is ordered without sugar', () => {
        const order = new DrinkOrder(new Chocolate(0))
        const expectedCommand = "H::"

        const drinkMakerProtocol = new DrinkMakerProtocol()
        const command = drinkMakerProtocol.buildCommand(order)

        expect(command).toBe(expectedCommand)
    })

    test('should return "H:2:0" when Chocolate is ordered with 2 sugar', () => {
        const order = new DrinkOrder(new Chocolate(2))
        const expectedCommand = "H:2:0"

        const drinkMakerProtocol = new DrinkMakerProtocol()
        const command = drinkMakerProtocol.buildCommand(order)

        expect(command).toBe(expectedCommand)
    })


    test('should return "C:2:0" when Coffee is ordered with two sugar', () => {
        const order = new DrinkOrder(new Coffee(2))
        const expectedCommand = "C:2:0"

        const drinkMakerProtocol = new DrinkMakerProtocol()
        const command = drinkMakerProtocol.buildCommand(order)

        expect(command).toBe(expectedCommand)
    })

    test('should return "Ch::" when ExtraHot Coffee is ordered without sugar',() => {
        const order = new DrinkOrder(new HotCoffee(0))
        const expectedCommand = 'Ch::'

        const drinkMakerProtocol = new DrinkMakerProtocol()
        const command = drinkMakerProtocol.buildCommand(order)

        expect(command).toBe(expectedCommand)
    })

    test('should return "Hh:1:0" when ExtraHot Chocolate is ordered with one sugar',() => {
        const order = new DrinkOrder(new HotChocolate(1))
        const expectedCommand = 'Hh:1:0'

        const drinkMakerProtocol = new DrinkMakerProtocol()
        const command = drinkMakerProtocol.buildCommand(order)

        expect(command).toBe(expectedCommand)
    })

    test('should return "Th:2:0" when ExtraHot Tea is ordered with 2 sugar',() => {
        const order =  new DrinkOrder(new HotTea(2))
        const expectedCommand = 'Th:2:0'

        const drinkMakerProtocol = new DrinkMakerProtocol()
        const command = drinkMakerProtocol.buildCommand(order)

        expect(command).toBe(expectedCommand)
    })

    test('should returns "O::" when Orange Juice is ordered',()=> {
        const order = new DrinkOrder(new OrangeJuice())
        const expectedCommand = "O::"

        const drinkMakerProtocol = new DrinkMakerProtocol()
        const command = drinkMakerProtocol.buildCommand(order)

        expect(command).toBe(expectedCommand)
    })

    test('should returns "M:message-content" when "message-content" received on the coffee machine', () => {
        // Arrange
        const expectedMessage = "M:message-content"
        const messageContent = "message-content"
        // Act
        const drinkMakerProtocol = new DrinkMakerProtocol()
        const command = drinkMakerProtocol.buildMessageCommand(messageContent)

        // Assert
        expect(command).toBe(expectedMessage)
    })

    test('should returns "M:foo" when "foo" received on the coffee machine', () => {
        // Arrange
        const expectedMessage = "M:foo"
        const messageContent = "foo"
        // Act
        const drinkMakerProtocol = new DrinkMakerProtocol()
        const command = drinkMakerProtocol.buildMessageCommand(messageContent)

        // Assert
        expect(command).toBe(expectedMessage)
    })
})
