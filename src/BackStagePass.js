const Item = require('./Item');

class BackStagePass extends Item {
  updateItem() {
    if (this.sellIn > 10) {
      this.quality += 1;
    } else if (this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn > 0) {
      this.quality += 3;
    } else {
      this.quality = 0;
    }

    this.sellIn -= 1;
    return this;
  }
}

module.exports = BackStagePass;