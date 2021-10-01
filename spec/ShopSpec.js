const Shop = require('../src/Shop.js');
const Item = require('../src/Item.js');
const BrieItem = require('../src/BrieItem.js');

describe('Shop', function () {
  it('should update details of foo item correctly', function () {
    const gildedRose = new Shop([new Item('foo', 2, 2)]);

    expect(gildedRose.updateQuality()[0]).toEqual(
      jasmine.objectContaining({
        name: 'foo',
        sellIn: 1,
        quality: 1,
      })
    );
  });

  it('should update details of Aged Brie correctly', function () {
    const gildedRose = new Shop([new BrieItem('Aged Brie', 8, 5)]);

    expect(gildedRose.updateQuality()[0]).toEqual(
      jasmine.objectContaining({
        name: 'Aged Brie',
        sellIn: 7,
        quality: 6,
      })
    );
  });
});
