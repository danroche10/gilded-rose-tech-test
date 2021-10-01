const Item = require('./Item');

class StandardItem extends Item {
  updateItem() {
    this.sellIn -= 1;
    if (this.quality > 0) {
      this.quality -= 1;
    }
    return this;
  }
}

module.exports = StandardItem;
