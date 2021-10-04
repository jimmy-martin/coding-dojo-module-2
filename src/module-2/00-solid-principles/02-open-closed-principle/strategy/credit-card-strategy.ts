import {PaymentStrategyInterface} from "./payment-strategy-interface";
import {OnlinePaymentRequest} from "./online-payment-request";

export class CreditCardStrategy implements PaymentStrategyInterface {
    pay(request: OnlinePaymentRequest): void {
    }
}
