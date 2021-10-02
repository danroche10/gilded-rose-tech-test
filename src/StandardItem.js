const Item = require('./Item');

class StandardItem extends Item {
  updateItem() {
    this.sellIn -= 1;
    this._updateQuality();
    return this;
  }
  _updateQuality() {
    if (this.quality > 0) {
      if (this.sellIn < 0) {
        this.quality -= 2;
      } else {
        this.quality -= 1;
      }
    }
  }
}

module.exports = StandardItem;
