type OnlinePaymentRequest = {
    type: 'credit' | 'paypal' | 'stripe' | 'bitcoin',
    amount: number
}

class Payment {
    constructor() {
    }

    payWithCreditCard() {

    }

    payWithPaypal() {

    }

    payWithStripe() {

    }

    payWithBitcoin() {

    }

    execute(request: OnlinePaymentRequest) {
        if (request.type == 'credit') {
            this.payWithCreditCard()
        } else if (request.type == 'stripe') {
            this.payWithStripe()
        } else if (request.type == 'bitcoin') {
            this.payWithBitcoin()
        } else {
            this.payWithPaypal()
        }
    }
}


// Usage
const paymentRequest: OnlinePaymentRequest = {
    type: 'credit',
    amount: 100,
}
const payment = new Payment()
payment.execute(paymentRequest)

// Stripe
const stripePaymentRequest: OnlinePaymentRequest = {
    type: 'stripe',
    amount: 50
}

payment.execute(stripePaymentRequest)
