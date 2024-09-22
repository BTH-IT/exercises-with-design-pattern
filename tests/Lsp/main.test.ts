// paymentProcessor.test.ts

import {
  CashPayment,
  CreditCardPayment,
  handlePayment,
  PayPalPayment,
} from '../../Solid/3.Lsp/main';

describe('PaymentProcessor Classes', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('CreditCardPayment', () => {
    it('should process credit card payment successfully', () => {
      const creditCardPayment = new CreditCardPayment();
      handlePayment(creditCardPayment, 100);

      expect(consoleSpy).toHaveBeenCalledWith(
        'Processing credit card payment of $100'
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        'Validating credit card details...'
      );
      expect(consoleSpy).toHaveBeenCalledWith('Charging the credit card...');
    });
  });

  describe('PayPalPayment', () => {
    it('should process PayPal payment successfully', () => {
      const payPalPayment = new PayPalPayment();
      handlePayment(payPalPayment, 200);

      expect(consoleSpy).toHaveBeenCalledWith(
        'Processing PayPal payment of $200'
      );
      expect(consoleSpy).toHaveBeenCalledWith('Redirecting to PayPal...');
      expect(consoleSpy).toHaveBeenCalledWith(
        'Completing PayPal transaction...'
      );
    });
  });

  describe('CashPayment', () => {
    it('should throw an error when processing cash payment online', () => {
      const cashPayment = new CashPayment();

      try {
        handlePayment(cashPayment, 50);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty(
          'message',
          'Cannot process cash payment online!'
        );
      }

      expect(consoleSpy).toHaveBeenCalledWith('Processing cash payment of $50');
    });
  });
});
