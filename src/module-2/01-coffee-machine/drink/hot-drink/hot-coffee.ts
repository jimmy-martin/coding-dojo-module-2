import {Drink} from "../drink";
import {HotDrink} from "./hot-drink";
import {DrinkCodes} from "../drink-codes-enum";
import {DrinkPrices} from "../drink-prices-enum";

export class HotCoffee extends HotDrink {
    constructor(sugarCount: number) {
        super(DrinkCodes.Coffee,DrinkPrices.Coffee, sugarCount );
    }
}
