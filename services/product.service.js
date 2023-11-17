class ProductService {
    sayYes() {
        return true;
    }

    setSku(param) {
        this.sku = param;
    }

    getSku() {
        return this.sku;
    }
}

module.exports = ProductService;