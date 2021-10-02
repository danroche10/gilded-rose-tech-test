const Item = require('./Item');

class Brie extends Item {
  updateItem() {
    if (this.quality < 0) {
      throw new Error('Item cannot have negative quality');
    }
    this.sellIn -= 1;
    this._updateQuality();
    return this;
  }

  _updateQuality() {
    if (this.quality < 50) {
      this.quality += 1;
    }
  }
}

module.exports = Brie;
