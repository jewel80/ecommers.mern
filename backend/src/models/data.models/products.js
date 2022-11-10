const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },
    sku: {
        type: String,
        unique: true
    },
    images: [{
        type: String,
    }],
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    productVariant: {
        type: String
    },
    sizes: [{
        type: String,
    }],
    colors: [{
        type: String,
    }],
    brand: {
        type: String,
    },
    reviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: String,
        },
        rating: {
            type: String,
        },
        comment: {
            type: String,
        },
    }],
    rating: {
        type: Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        trim: true,
        default: 0
    },
    countInStock: {
        type: Number,
        default: 0
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    seller: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
module.exports = mongoose.model('Products', productSchema);