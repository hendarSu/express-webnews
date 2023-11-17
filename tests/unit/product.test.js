const ProductService = require("../../services/product.service")

const productService= new ProductService();
describe("Unit Testing - product.service.js", () => {
    it("[+] Say yes this is service product.", () => {
        const yes = productService.sayYes();
        expect(yes).toEqual(true);
    })

    it("[+] setter and getter SKU di product.", () => {
        const skuParam = "0001";
        const sku = productService.setSku(skuParam)
        const skuData = productService.getSku();
        expect(skuData).toEqual(skuParam);
    })

    // TODO: PR 01 sku, nama, hargaProduksi, hargaJual dan hargaBeli
})