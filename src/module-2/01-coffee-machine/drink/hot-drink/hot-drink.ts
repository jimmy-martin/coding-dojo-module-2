import {Drink} from "../drink";

export class HotDrink extends Drink {
    constructor(code: string, price: number, sugarCount: number) {
        super(code,price,sugarCount);
    }

    get getCode() {
        return `${this.code}h`
    }
}
