import {DrinkInterface} from "../interface/drink-interface";
import {DrinkOrderInterface} from "../interface/drink-order-interface";

export class DrinkOrder implements DrinkOrderInterface {
    private drink: DrinkInterface

    constructor(drink: DrinkInterface) {
        this.drink = drink
    }

    getDrinkCode(): string {
        return this.drink.getCode
    }

    getPrice(): number {
        return this.drink.getPrice
    }

    getSugarQuantity(): number {
        return this.drink.getSugarCount
    }

}
