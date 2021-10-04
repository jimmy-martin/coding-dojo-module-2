import {HotDrink} from "./hot-drink";
import {DrinkCodes} from "../drink-codes-enum";
import {DrinkPrices} from "../drink-prices-enum";

export class HotTea extends HotDrink {
    constructor(sugarCount: number) {
        super(DrinkCodes.Tea, DrinkPrices.Tea, sugarCount);
    }
}
