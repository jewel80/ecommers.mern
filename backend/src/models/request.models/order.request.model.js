const Joi = require('joi');

const schema = Joi.object().keys(
    {
        shippingInfo: Joi.object(),
        userId: Joi.string().required(),
        orderItems: Joi.array(),
        paymentInfo: Joi.object(),
        paidAt: Joi.date(),
        itemsPrice: Joi.number().required(),
        shippingPrice: Joi.number().required(),
        totalPrice: Joi.number().required(),
        deliveredAt: Joi.date()
    }
);

const orderSchemaValidate = (data) => {
    const result = schema.validate(data);
    data.createdAt = new Date();
    result.value = data;
    return result;
}
module.exports = orderSchemaValidate;


