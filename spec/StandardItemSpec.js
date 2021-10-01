const StandardItem = require('../src/StandardItem.js');

fdescribe('StandardItem', function () {
  describe('#updateItem', function () {
    it('should reduce quality by 1', function () {
      newStandardItem = new StandardItem('Pears', 8, 5);

      expect(newStandardItem.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'Pears',
          sellIn: 7,
          quality: 4,
        })
      );
    });
  });
});
