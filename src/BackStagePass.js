const Item = require('./Item');

class BackStagePass extends Item {
  updateItem() {
    if (this.sellIn > 10) {
      this.quality += 1;
    } else if (this.sellIn > 5) {
      this.quality += 2;
    }

    this.sellIn -= 1;
    return this;
  }
}

module.exports = BackStagePass;
