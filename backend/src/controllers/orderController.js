//imported required file and package...
const express = require("express");
const router = express.Router();
const { saveOrderService, getOrderServiceAsync, getOrderByIdService, } = require("../services/orderService");
const { handleValidation } = require("../middlewares");
const orderSchemaValidate = require("../models/request.models/order.request.model");

/**
 * Retrieve all order record list...
 */
const getOrdersAsync = async (req, res, next) => {
    try {
        const orders = await getOrderServiceAsync();

        res.status(200).json({
            createDate: new Date().toUTCString(),
            success: true,
            status: 200,
            message: "Successfully retrieved the requested data",
            data: { orders }
        });
    } catch (error) {
        return next(error, req, res);
    }
};

/**
 * Retrieve order record by Id...
 */
const getOrderByIdAsync = async (req, res, next) => {
    try {
        const id = req.params.orderId;
        const order = await getOrderByIdService(id);
        if (order) {
            res.status(200).json({
                createDate: new Date().toUTCString(),
                success: true,
                status: 200,
                message: "Successfully retrieved the requested data",
                data: { order }
            });
        }
        else {
            throw new NotFound('Order not found by the id: ' + id);
        }
    } catch (error) {
        return next(error, req, res);
    }
};

/**
 * Create order record...
 */
const createOrderAsync = async (req, res, next) => {
    try {
        const order = await saveOrderService(req.body);

        res.status(200).json({
            createDate: new Date().toUTCString(),
            success: true,
            status: 200,
            message: 'Order created successfully.',
            data: { order: order }
        });
    } catch (error) {
        return next(error, req, res);
    }
};

/**
 * All Route path define...
 */
router.get('/', getOrdersAsync);
router.get('/:orderId', getOrderByIdAsync);
router.post('/', handleValidation(orderSchemaValidate), createOrderAsync);

module.exports = router;