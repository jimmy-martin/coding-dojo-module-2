export class CashRegister {
    private insertedMoney: number

    constructor() {
        this.insertedMoney = 0
    }

    get actualMoney(): number {
        return this.insertedMoney
    }

    insertMoney(coin: number) {
        this.insertedMoney += coin
    }
}
