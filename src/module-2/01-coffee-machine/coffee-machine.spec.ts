import {CoffeeMachine} from './coffee-machine'
import {DrinkMakerProtocol} from "./drink-maker-protocol";
import {CashRegister} from "./cash-register";
import {Coffee} from "./drink/coffee";
import {DrinkOrder} from "./drink/drink-order";
import {Tea} from "./drink/tea";
import {Chocolate} from "./drink/chocolate";


describe('Coffee Machine', () => {

    /*
            ['M:0.2', 0.3, 'Chocolate',0]
     */
    test('should returns "M:0.3" when 0.3 euros are inserted and a Coffee with 0 sugar is is ordered', () => {
        // Arrange
        const insertedMoney = 0.3
        const drinkOrder = new DrinkOrder(new Coffee(0))
        const expectedMessage = 'M:0.3'

        // Act
        const cashRegister = new CashRegister()
        const drinkMakerProtocol = new DrinkMakerProtocol()
        const coffeeMachine = new CoffeeMachine(drinkMakerProtocol, cashRegister)

        coffeeMachine.insertMoney(insertedMoney)
        const command = coffeeMachine.sendCommand(drinkOrder)

        // Assert
        expect(command).toBe(expectedMessage)
    })

    test('should returns "M:0.1" when 0.3 euros are inserted and a Tea with 0 sugar is is ordered', () => {
        // Arrange
        const insertedMoney = 0.3
        const drinkOrder = new DrinkOrder(new Tea(0))
        const expectedMessage = 'M:0.1'

        // Act
        const cashRegister = new CashRegister()
        const drinkMakerProtocol = new DrinkMakerProtocol()
        const coffeeMachine = new CoffeeMachine(drinkMakerProtocol, cashRegister)

        coffeeMachine.insertMoney(insertedMoney)
        const command = coffeeMachine.sendCommand(drinkOrder)

        // Assert
        expect(command).toBe(expectedMessage)
    })

    test('should returns "M:0.2" when 0.3 euros are inserted and a Chocolate with 0 sugar is is ordered', () => {
        // Arrange
        const insertedMoney = 0.3
        const drinkOrder = new DrinkOrder(new Chocolate(0))
        const expectedMessage = 'M:0.2'

        // Act
        const cashRegister = new CashRegister()
        const drinkMakerProtocol = new DrinkMakerProtocol()
        const coffeeMachine = new CoffeeMachine(drinkMakerProtocol, cashRegister)

        coffeeMachine.insertMoney(insertedMoney)
        const command = coffeeMachine.sendCommand(drinkOrder)

        // Assert
        expect(command).toBe(expectedMessage)
    })

    test('should return "T:1:0" when Tea is ordered with one sugar',()=> {
        // Arrange
        const insertedMoney = 1
        const drinkOrder = new DrinkOrder(new Tea(1))
        const expectedMessage = 'T:1:0'

        // Act
        const cashRegister = new CashRegister()
        const drinkMakerProtocol = new DrinkMakerProtocol()
        const coffeeMachine = new CoffeeMachine(drinkMakerProtocol, cashRegister)

        coffeeMachine.insertMoney(insertedMoney)
        const command = coffeeMachine.sendCommand(drinkOrder)

        expect(command).toBe(expectedMessage)
    })

    test('should return "H::" when Chocolate is ordered with no sugar',()=> {
        // Arrange
        const insertedMoney = 1
        const drinkOrder = new DrinkOrder(new Chocolate(0))
        const expectedMessage = 'H::'

        // Act
        const cashRegister = new CashRegister()
        const drinkMakerProtocol = new DrinkMakerProtocol()
        const coffeeMachine = new CoffeeMachine(drinkMakerProtocol, cashRegister)

        coffeeMachine.insertMoney(insertedMoney)
        const command = coffeeMachine.sendCommand(drinkOrder)

        expect(command).toBe(expectedMessage)
    })

    // should return "C:2:0" when Coffee is ordered with two sugar
    test('should return "C:2:0" when Coffee is ordered with no sugar',()=> {
        // Arrange
        const insertedMoney = 1
        const drinkOrder = new DrinkOrder(new Coffee(2))
        const expectedMessage = 'C:2:0'

        // Act
        const cashRegister = new CashRegister()
        const drinkMakerProtocol = new DrinkMakerProtocol()
        const coffeeMachine = new CoffeeMachine(drinkMakerProtocol, cashRegister)

        coffeeMachine.insertMoney(insertedMoney)
        const command = coffeeMachine.sendCommand(drinkOrder)

        expect(command).toBe(expectedMessage)
    })

})
