describe('Shop', function () {
  const Shop = require('../src/Shop.js');
  const Item = require('../src/Item.js');
  const BrieItem = require('../src/BrieItem.js');

  it('should call updateItem method in Item class', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 8, 5)]);
    console.log(BrieItem);
    spyOn(BrieItem, 'updateItem').and.returnValue(true);
    gildedRose.updateQuality();
    expect(brieItem.updateItem).toHaveBeenCalled();
  });
});
