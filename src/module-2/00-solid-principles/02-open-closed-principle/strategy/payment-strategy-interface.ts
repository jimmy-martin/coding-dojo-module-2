import {OnlinePaymentRequest} from './online-payment-request'

export interface PaymentStrategyInterface {
    pay(request: OnlinePaymentRequest): void
}
