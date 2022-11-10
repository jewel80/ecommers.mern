const Order = require("../models/data.models/orders");
const { OrderViewModel } = require("../models/view.models/order.view.model");
const { ApiError } = require('../common/api-error');

/**
 * @returns {All user data}
 */
const getOrderServiceAsync = async () => {
    const documents = await Order.find();

    //created a class which view render data as "OrderViewModel"...
    const viewModels = documents.map(document => new OrderViewModel(document));

    return viewModels;
}

const saveOrderService = async (order) => {
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        userId
    } = order;

    let document;

    try {
        document = await Order.create({
            orderItems,
            shippingInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paymentInfo,
            paidAt: Date.now(),
            userId
        });
    } catch (error) {
        // checks if duplicate key found...
        if (error.code === 11000) {
            const keys = Object.keys(error.keyValue);

            throw new ApiError(422, `A order is already associated with the ${keys[0]}, '${error.keyValue[keys[0]]}'.`);
        }

        throw error;
    }

    if (!document) {
        throw new Error('An unexpected error occurred while creating order.');
    }

    return document;
}

const getOrderByIdService = async (id) => {
    const model = await Order.findById(id);
    const viewModel = new OrderViewModel(model);
    return viewModel;
}

//export requied function...
module.exports = {
    getOrderServiceAsync,
    saveOrderService,
    getOrderByIdService
}