import {DrinkMakerProtocol} from "./drink-maker-protocol";
import {CashRegister} from "./cash-register";
import {DrinkOrderInterface} from "./interface/drink-order-interface";

export class CoffeeMachine {
    private cashRegister: CashRegister
    private drinkMakerProtocol: DrinkMakerProtocol
    constructor(drinkMakerProtocol: DrinkMakerProtocol, cashRegister: CashRegister) {
        this.drinkMakerProtocol = drinkMakerProtocol
        this.cashRegister = cashRegister
    }


    insertMoney(insertedMoney: number) {
        this.cashRegister.insertMoney(insertedMoney)
    }

    sendCommand(drinkOrder: DrinkOrderInterface) {
        const insertedMoney = this.cashRegister.actualMoney
        const drinkOrderPrice = drinkOrder.getPrice()
        if(insertedMoney < drinkOrderPrice){
            const difference =  (drinkOrderPrice - insertedMoney).toFixed(1)
            return this.drinkMakerProtocol.buildMessageCommand(difference)
        }
        return this.drinkMakerProtocol.buildCommand(drinkOrder)
    }
}
