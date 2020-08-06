const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    items: { type:Object, required: true },
    shipping_address: { type: Object, required: true },
    payment: { type: Object, required: true },
    total_amount: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);