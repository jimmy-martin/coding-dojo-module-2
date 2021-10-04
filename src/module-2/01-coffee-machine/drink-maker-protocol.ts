import {DrinkOrderInterface} from "./interface/drink-order-interface";

export class DrinkMakerProtocol {

    buildCommand(drinkOrder: DrinkOrderInterface) {
        let drinkCode = drinkOrder.getDrinkCode()
        let sugarCount = drinkOrder.getSugarQuantity()

        if (sugarCount <= 0) {
            return `${drinkCode}::`
        }

        sugarCount = drinkOrder.getSugarQuantity()
        return `${drinkCode}:${sugarCount}:0`
    }

    buildMessageCommand(messageContent: string) {
        return `M:${messageContent}`
    }
}
