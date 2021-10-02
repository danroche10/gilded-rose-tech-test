describe('Brie', function () {
  const Brie = require('../src/Brie.js');
  let brie;
  describe('#updateItem', function () {
    it('should increase quality by 1 if quality is less than 50', function () {
      brie = new Brie('Aged Brie', 8, 5);

      expect(brie.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'Aged Brie',
          sellIn: 7,
          quality: 6,
        })
      );
    });

    it('should not change quality if quality is 50', function () {
      brie = new Brie('Aged Brie', 8, 50);

      expect(brie.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'Aged Brie',
          sellIn: 7,
          quality: 50,
        })
      );
    });
  });
});
