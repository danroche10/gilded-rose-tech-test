const BrieItem = require('../src/BrieItem.js');

describe('Shop', function () {
  fit('should update details of Aged Brie correctly', function () {
    newBrieItem = new BrieItem('Aged Brie', 8, 5);

    expect(newBrieItem.updateItem()).toEqual(
      jasmine.objectContaining({
        name: 'Aged Brie',
        sellIn: 7,
        quality: 6,
      })
    );
  });
});
