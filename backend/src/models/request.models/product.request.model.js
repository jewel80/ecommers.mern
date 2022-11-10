const Joi = require('joi');

const schema = Joi.object().keys(
    {
        sku: Joi.string().alphanum().min(3).max(30).required(),
        name: Joi.string().min(3).max(120).required(),
        description: Joi.string().max(256).required(),
        images: Joi.array().required(),
        category: Joi.string().required(),
        sizes: Joi.array(),
        colors: Joi.array(),
        productVariant: Joi.string(),
        brand: Joi.string(),
        reviews: Joi.array(),
        rating: Joi.number(),
        seller: Joi.string(),
        numberOfReviews: Joi.number(),
        numReviews: Joi.number(),
        ratings: Joi.number(),
        price: Joi.number().required(),
        countInStock: Joi.number().required(),
    }
);

const productSchemaValidate = (data) => {
    const result = schema.validate(data);
    data.createdAt = new Date();
    result.value = data;
    return result;
}
module.exports = productSchemaValidate;