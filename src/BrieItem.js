const Item = require('./Item');

class BrieItem extends Item {
  updateItem() {
    console.log(this.quality);
    this.sellIn -= 1;
    this.quality += 1;
    return this;
  }
}

module.exports = BrieItem;
