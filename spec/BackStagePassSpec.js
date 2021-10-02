describe('BackStagePass', function () {
  const BackStagePass = require('../src/BackStagePass');
  let backStagePass;
  describe('#updateItem', function () {
    it('should increase quality by 1 when 15 days left of sellIn', function () {
      backStagePass = new BackStagePass('BackStagePass', 15, 5);

      expect(backStagePass.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'BackStagePass',
          sellIn: 14,
          quality: 6,
        })
      );
    });

    it('should increase quality by 2 when 9 days left of sellIn', function () {
      backStagePass = new BackStagePass('BackStagePass', 9, 5);

      expect(backStagePass.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'BackStagePass',
          sellIn: 8,
          quality: 7,
        })
      );
    });

    it('should increase quality by 3 when 4 days left of sellIn', function () {
      backStagePass = new BackStagePass('BackStagePass', 4, 5);

      expect(backStagePass.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'BackStagePass',
          sellIn: 3,
          quality: 8,
        })
      );
    });

    it('quality is zero afte the concert', function () {
      backStagePass = new BackStagePass('BackStagePass', 0, 5);

      expect(backStagePass.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'BackStagePass',
          sellIn: -1,
          quality: 0,
        })
      );
    });
  });
});
