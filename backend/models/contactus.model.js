const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactUsSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

const contactUs = mongoose.model('contactusform', contactUsSchema);

module.exports = contactUs;