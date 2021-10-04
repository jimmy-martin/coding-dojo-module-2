import {DrinkInterface} from "../interface/drink-interface";


export abstract class Drink implements DrinkInterface {
    protected code: string
    protected price: number
    protected sugars: number = 0

    protected constructor(code: string, price: number, sugars: number) {
        this.code = code
        this.price = price
        this.sugars = sugars
    }

    public get getCode() {
        return this.code
    }

    public get getPrice() {
        return this.price
    }

    public get getSugarCount() {
        return this.sugars
    }
}
