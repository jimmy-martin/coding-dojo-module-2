import {Drink} from "./drink";
import {DrinkPrices} from "./drink-prices-enum";
import {DrinkCodes} from "./drink-codes-enum";

export class Chocolate extends Drink {
    constructor(sugarCount: number) {
        super(DrinkCodes.Chocolate, DrinkPrices.Chocolate, sugarCount);
    }

}
