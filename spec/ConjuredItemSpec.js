describe('ConjuredItem', function () {
  const ConjuredItem = require('../src/ConjuredItem.js');
  let conjuredItem;
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

    it('quality should not reduce below 0', function () {
      conjuredItem = new ConjuredItem('ConjuredItem', 8, 0);

      expect(conjuredItem.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'ConjuredItem',
          sellIn: 7,
          quality: 0,
        })
      );
    });

    it('quality should degrade twice as fast once sell by date has past', function () {
      conjuredItem = new ConjuredItem('Conjured Item', -4, 10);

      expect(conjuredItem.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'Conjured Item',
          sellIn: -5,
          quality: 6,
        })
      );
    });

    it('should throw error if negative quality has been inputted', function () {
      conjuredItem = new ConjuredItem('Conjured Item', 10, -4);

      expect(function () {
        conjuredItem.updateItem();
      }).toThrow(new Error('Item cannot have negative quality'));
    });
  });
});
