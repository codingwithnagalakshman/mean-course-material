const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
     _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    productId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);