describe('Shop', function () {
  const Shop = require('../src/Shop.js');
  let item;
  let gildedRose;

  beforeEach(function () {
    item = jasmine.createSpyObj('item', ['updateItem']);
    gildedRose = new Shop([item]);
    gildedRose.updateQuality();
  });

  it('should call updateItem method in Item class', function () {
    expect(item.updateItem).toHaveBeenCalled();
  });
});
