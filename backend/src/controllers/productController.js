//imported required file and package...
const express = require("express");
const router = express.Router();
const { saveProductService, getProductServiceAsync, getProductByIdService, } = require("../services/productService");
const { handleValidation } = require("../middlewares");
const productSchemaValidate = require("../models/request.models/product.request.model");

/**
 * Retrieve all products record list...
 */
const getProductsAsync = async (req, res, next) => {
    try {
        const products = await getProductServiceAsync();

        res.status(200).json({
            createDate: new Date().toUTCString(),
            success: true,
            status: 200,
            message: "Successfully retrieved the requested data",
            data: { products }
        });
    } catch (error) {
        return next(error, req, res);
    }
};

/**
 * Retrieve product record by Id...
 */
const getProductByIdAsync = async (req, res, next) => {
    try {
        const id = req.params.productId;
        
        const product = await getProductByIdService(id);
        if (product) {
            res.status(200).json({
                createDate: new Date().toUTCString(),
                success: true,
                status: 200,
                message: "Successfully retrieved the requested data",
                data: { product }
            });
        }
        else {
            throw new NotFound('product not found by the product Id: ' + id);
        }
    } catch (error) {
        return next(error, req, res);
    }
};

/**
 * Create product record...
 */
const createProductsAsync = async (req, res, next) => {
    try {
        const product = await saveProductService(req.body);

        res.status(200).json({
            createDate: new Date().toUTCString(),
            success: true,
            status: 200,
            message: 'Product created successfully.',
            data: { product }
        });
    } catch (error) {
        return next(error, req, res);
    }
};


/**
 * All Route path define...
 */
router.get('/', getProductsAsync);
router.get('/:productId', getProductByIdAsync);
router.post('/', handleValidation(productSchemaValidate), createProductsAsync);

module.exports = router;