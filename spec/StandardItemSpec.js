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

    it('quality should not reduce below 0', function () {
      newStandardItem = new StandardItem('Pears', 8, 0);

      expect(newStandardItem.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'Pears',
          sellIn: 7,
          quality: 0,
        })
      );
    });

    it('quality should degrade twice as fast once sell by date has past', function () {
      newStandardItem = new StandardItem('Pears', -4, 10);

      expect(newStandardItem.updateItem()).toEqual(
        jasmine.objectContaining({
          name: 'Pears',
          sellIn: -5,
          quality: 8,
        })
      );
    });
  });
});
