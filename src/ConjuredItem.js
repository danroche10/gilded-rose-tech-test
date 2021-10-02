const Item = require('./Item');

class ConjuredItem extends Item {
  updateItem() {
    if (this.quality < 0) {
      throw new Error('Item cannot have negative quality');
    }
    this.sellIn -= 1;
    this._updateQuality();
    return this;
  }
  _updateQuality() {
    if (this.quality > 0) {
      if (this.sellIn < 0) {
        this.quality -= 4;
      } else {
        this.quality -= 2;
      }
    }
  }
}

module.exports = ConjuredItem;
