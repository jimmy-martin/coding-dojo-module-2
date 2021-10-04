import {Drink} from "./drink";
import {DrinkCodes} from "./drink-codes-enum";
import {DrinkPrices} from "./drink-prices-enum";

export class OrangeJuice extends Drink {
    constructor() {
        super(DrinkCodes.OrangeJuice, DrinkPrices.OrangeJuice, 0);
    }
}
