const Item = require('./Item');

class BrieItem extends Item {
  updateItem() {
    this.sellIn -= 1;
    if (this.quality < 50) {
      this.quality += 1;
    }
    return this;
  }
}

module.exports = BrieItem;
