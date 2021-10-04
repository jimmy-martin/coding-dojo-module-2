import {Drink} from "./drink";
import {DrinkPrices} from "./drink-prices-enum";
import {DrinkCodes} from "./drink-codes-enum";

export class Coffee extends Drink {
    constructor(sugarCount: number) {
        super(DrinkCodes.Coffee,DrinkPrices.Coffee, sugarCount);
    }

}
