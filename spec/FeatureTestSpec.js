describe('FeatureTest', function () {
  const Brie = require('../src/Brie');
  const BackStagePass = require('../src/BackStagePass');
  const StandardItem = require('../src/StandardItem');
  const Sulfura = require('../src/Sulfura');
  const Shop = require('../src/Shop');

  let brie;
  let backStagePass;
  let standardItem;
  let sulfura;
  let items;
  let gildedRose;

  describe('one of each item', function () {
    beforeEach(function () {
      brie = new Brie('Aged Brie', 10, 10);
      backStagePass = new BackStagePass('Music Concert', 10, 10);
      standardItem = new StandardItem('Pears', 10, 10);
      sulfura = new Sulfura('sulfura', 'n/a', 10);
      items = [brie, backStagePass, standardItem, sulfura];
      gildedRose = new Shop(items);
    });

    it('returns items with correct sellIn and quality after being called once', function () {
      gildedRose.updateStock();
      expect(brie).toEqual(
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

    it('returns items with correct sellIn and quality after being called twice', function () {
      gildedRose.updateStock();
      gildedRose.updateStock();
      expect(brie).toEqual(
        jasmine.objectContaining({
          sellIn: 8,
          quality: 12,
        })
      );
      expect(backStagePass).toEqual(
        jasmine.objectContaining({
          sellIn: 8,
          quality: 14,
        })
      );
      expect(standardItem).toEqual(
        jasmine.objectContaining({
          sellIn: 8,
          quality: 8,
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
