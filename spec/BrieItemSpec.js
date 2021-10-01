const BrieItem = require('../src/BrieItem.js');

fdescribe('Shop', function () {
  it('should update quality by 1 if quality is less than 50', function () {
    newBrieItem = new BrieItem('Aged Brie', 8, 5);

    expect(newBrieItem.updateItem()).toEqual(
      jasmine.objectContaining({
        name: 'Aged Brie',
        sellIn: 7,
        quality: 6,
      })
    );
  });

  it('should not change quality if quality is 50', function () {
    newBrieItem = new BrieItem('Aged Brie', 8, 50);

    expect(newBrieItem.updateItem()).toEqual(
      jasmine.objectContaining({
        name: 'Aged Brie',
        sellIn: 7,
        quality: 50,
      })
    );
  });
});
