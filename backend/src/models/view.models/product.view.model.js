class ProductViewModel {
    constructor(product) {
        this.productId = product._id;
        this.name = product.name;
        this.sku = product.sku;
        this.images = product.images;
        this.description = product.description;
        this.category = product.category;
        this.productVariant = product.productVariant;
        this.sizes = product.sizes;
        this.colors = product.colors;
        this.brand = product.brand;
        this.reviews = product.reviews;
        this.rating = product.rating;
        this.numReviews = product.numReviews;
        this.price = product.price;
        this.countInStock = product.countInStock;
        this.numberOfReviews = product.numberOfReviews;
        this.seller = product.seller;
        this.createdAt = product.createdAt;
    }
}
module.exports.ProductViewModel= ProductViewModel;