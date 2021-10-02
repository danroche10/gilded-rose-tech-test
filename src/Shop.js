class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateStock() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateItem();
    }
    return this.items;
  }
}
module.exports = Shop;
