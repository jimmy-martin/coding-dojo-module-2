import {PaymentStrategyInterface} from "./strategy/payment-strategy-interface";
import {OnlinePaymentRequest} from "./strategy/online-payment-request";
import {CreditCardStrategy} from "./strategy/credit-card-strategy";
import {StripeStrategy} from "./strategy/stripe-strategy";


class Payment {
    private strategy: PaymentStrategyInterface;

    constructor(strategy: PaymentStrategyInterface) {
        this.strategy = strategy
    }

    execute(request: OnlinePaymentRequest) {
        this.strategy.pay(request)
    }
}

// Usage
const paymentRequest: OnlinePaymentRequest = {
    amount: 100
}
const payment = new Payment(new CreditCardStrategy())
payment.execute(paymentRequest)

// Usage
/*const bitcoinPaymentRequest = {
    amount: 100
}
const bitcoinPayment = new Payment(new BitcoinStrategy())
payment.execute(bitcoinPaymentRequest)*/

const stripePaymentRequest: OnlinePaymentRequest = {
    amount: 120
}

const stripePayment = new Payment(new StripeStrategy())
stripePayment.execute(stripePaymentRequest)









