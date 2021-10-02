fdescribe('FeatureTest', function () {
  const Brie = require('../src/BrieItem');
  const BackStagePass = require('../src/BackStagePass');
  const StandardItem = require('../src/StandardItem');
  const Sulfura = require('../src/Sulfura');
  const Shop = require('../src/Shop');

  let brieItem;
  let backStagePass;
  let standardItem;
  let sulfura;
  let items;
  let gildedRose;

  describe('one of each item', function () {
    brieItem = new Brie('Aged Brie', 10, 10);
    backStagePass = new BackStagePass('Music Concert', 10, 10);
    standardItem = new StandardItem('Pears', 10, 10);
    sulfura = new Sulfura('sulfura', 'n/a', 10);
    items = [brieItem, backStagePass, standardItem, sulfura];
    gildedRose = new Shop(items);
    it('should increase quality by 1 if quality is less than 50', function () {
      gildedRose.updateStock();
      expect(brieItem).toEqual(
        jasmine.objectContaining({
          sellIn: 9,
          quality: 11,
        })
      );
      expect(backStagePass).toEqual(
        jasmine.objectContaining({
          sellIn: 9,
          quality: 12,
        })
      );
      expect(standardItem).toEqual(
        jasmine.objectContaining({
          sellIn: 9,
          quality: 9,
        })
      );
      expect(sulfura).toEqual(
        jasmine.objectContaining({
          sellIn: 'n/a',
          quality: 10,
        })
      );
    });
  });
});
