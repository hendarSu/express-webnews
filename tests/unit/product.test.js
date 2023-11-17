const ProductService = require("../../services/product.service")

const productService= new ProductService();
describe("Unit Testing - product.service.js", () => {
    it("[+] Say yes this is service product.", () => {
        const yes = productService.sayYes();
        expect(yes).toEqual(true);
    })
})