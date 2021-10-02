describe('Sulfura', function () {
  const Sulfura = require('../src/Sulfura.js');
  let sulfura;
  describe('#updateItem', function () {
    it('selIn days and quality shhould not reduce', function () {
      sulfura = new Sulfura('Sulfura', 'n/a', 5);

      expect(sulfura.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'Sulfura',
          sellIn: 'n/a',
          quality: 5,
        })
      );
    });
  });
});
