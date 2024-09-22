/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface IPaymentProcessor {
  processPayment(amount: number): void;
}

export abstract class PaymentProcessor implements IPaymentProcessor {
  abstract processPayment(amount: number): void;
}

export class CreditCardPayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
    console.log('Validating credit card details...');
    console.log('Charging the credit card...');
  }
}

export class PayPalPayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    console.log('Redirecting to PayPal...');
    console.log('Completing PayPal transaction...');
  }
}
export class CashPayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing cash payment of $${amount}`);
    throw new Error('Cannot process cash payment online!');
  }
}

export function handlePayment(
  paymentProcessor: PaymentProcessor,
  amount: number
): void {
  paymentProcessor.processPayment(amount);
}
