const Item = require('./Item');

class BrieItem extends Item {
  updateItem() {
    console.log(this.quality);
    this.quality += 1;
  }
}

module.exports = BrieItem;
