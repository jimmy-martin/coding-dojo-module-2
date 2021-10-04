import {PaymentStrategyInterface} from "./payment-strategy-interface";
import { OnlinePaymentRequest } from "./online-payment-request";

class BitcoinStrategy implements PaymentStrategyInterface {
    pay(request: OnlinePaymentRequest): void {
    }
}
