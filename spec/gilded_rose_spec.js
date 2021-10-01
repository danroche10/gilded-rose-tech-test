var { Shop, Item } = require('../src/gilded_rose.js');
describe('Gilded Rose', function () {
  it('should foo', function () {
    const gildedRose = new Shop([new Item('foo', 2, 2)]);
    expect(gildedRose.updateQuality()[0]).toEqual(
      jasmine.objectContaining({
        name: 'foo',
        sellIn: 1,
        quality: 1,
      })
    );
  });
});
