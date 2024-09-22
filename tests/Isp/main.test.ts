import {
  NewFashionedPrinter,
  OldFashionedPrinter,
} from '../../Solid/4.Isp/main';

describe('Printer Classes', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('OldFashionedPrinter', () => {
    it('should print a document', () => {
      const printer = new OldFashionedPrinter();
      printer.print('Old Document 1');

      expect(consoleSpy).toHaveBeenCalledWith(
        'Printing document: Old Document 1'
      );
    });
  });

  describe('NewFashionedPrinter', () => {
    it('should print a document', () => {
      const newFashionedPrinter = new NewFashionedPrinter();
      newFashionedPrinter.print('New Document 2');

      expect(consoleSpy).toHaveBeenCalledWith(
        'Printing document: New Document 2'
      );
    });

    it('should scan a document', () => {
      const newFashionedPrinter = new NewFashionedPrinter();
      newFashionedPrinter.scan('New Document 3');

      expect(consoleSpy).toHaveBeenCalledWith(
        'Scanning document: New Document 3'
      );
    });

    it('should fax a document', () => {
      const newFashionedPrinter = new NewFashionedPrinter();
      newFashionedPrinter.fax('New Document 4');

      expect(consoleSpy).toHaveBeenCalledWith(
        'Faxing document: New Document 4'
      );
    });
  });
});
