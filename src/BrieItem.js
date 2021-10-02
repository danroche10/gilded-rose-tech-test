const Item = require('./Item');

class BrieItem extends Item {
  updateItem() {
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

module.exports = BrieItem;
