const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Country', countrySchema);