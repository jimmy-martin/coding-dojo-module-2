import {PaymentStrategyInterface} from "./payment-strategy-interface";
import { OnlinePaymentRequest } from "./online-payment-request";

export class StripeStrategy implements PaymentStrategyInterface {
    pay(request: OnlinePaymentRequest): void {
        // implement stripe strategy
    }
}
