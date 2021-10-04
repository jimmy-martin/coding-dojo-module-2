import {Drink} from "./drink";
import {DrinkPrices} from "./drink-prices-enum";
import {DrinkCodes} from "./drink-codes-enum";

export class Tea extends Drink {
    constructor(sugarCount: number) {
        super(DrinkCodes.Tea, DrinkPrices.Tea, sugarCount);
    }
}
