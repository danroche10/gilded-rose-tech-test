const ConjuredItem = require('../src/ConjuredItem.js');

describe('ConjuredItem', function () {
  describe('#updateItem', function () {
    it('selIn days and quality should reduce by twice that of normal item', function () {
      conjuredItem = new ConjuredItem('Conjured Item', 10, 10);

      expect(conjuredItem.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'Conjured Item',
          sellIn: 9,
          quality: 8,
        })
      );
    });
  });
});
