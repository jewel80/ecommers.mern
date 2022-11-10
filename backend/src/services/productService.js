const Product = require("../models/data.models/products");
const { ProductViewModel } = require("../models/view.models/product.view.model");
const { ApiError } = require('../common/api-error');

/**
 * @returns {All user data}
 */
const getProductServiceAsync = async () => {
    const documents = await Product.find();

    //created a class which view render data as "ProductViewModel"...
    const viewModels = documents.map(document => new ProductViewModel(document));

    return viewModels;
}

/**
 * product: Object
 */
const saveProductService = async (product) => {
    let document;

    try {
        document = await Product.create(product);
    } catch (error) {
        // checks if duplicate key found...
        if (error.code === 11000) {
            const keys = Object.keys(error.keyValue);

            throw new ApiError(422, `A product is already associated with the ${keys[0]}, '${error.keyValue[keys[0]]}'.`);
        }

        throw error;
    }

    if (!document) {
        throw new Error('An unexpected error occurred while creating product.');
    }

    return document;
}

/**
 * 
 * @param {String} id 
 * @returns object data...
 */
const getProductByIdService = async (id) => {
    const model = await Product.findById(id);
    const viewModel = new ProductViewModel(model);
    return viewModel;
}



//export requied function...
module.exports = {
    getProductServiceAsync,
    saveProductService,
    getProductByIdService
}