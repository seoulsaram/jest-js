//dependency injection 버전.
//const ProductClient = require('./product_client.js');
class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient.fetchItems().then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
