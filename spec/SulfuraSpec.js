const Sulfura = require('../src/Sulfura.js');

describe('Sulfura', function () {
  describe('#updateItem', function () {
    it('selIn days and quality shhould not reduce', function () {
      sulfuraItem = new Sulfura('Sulfura', 'n/a', 5);

      expect(sulfuraItem.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'Sulfura',
          sellIn: 'n/a',
          quality: 5,
        })
      );
    });
  });
});
