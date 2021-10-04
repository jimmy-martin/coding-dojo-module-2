import {HotDrink} from "./hot-drink";
import {DrinkCodes} from "../drink-codes-enum";
import {DrinkPrices} from "../drink-prices-enum";

export class HotChocolate extends HotDrink {
    constructor(sugarCount: number) {
        super(DrinkCodes.Chocolate, DrinkPrices.Chocolate, sugarCount)
    }
}
