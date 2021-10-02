const Item = require('./Item');

class Sulfura extends Item {
  updateItem() {
    if (this.quality < 0) {
      throw new Error('Item cannot have negative quality');
    }
    return this;
  }
}

module.exports = Sulfura;
