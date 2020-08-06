const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
    },
    facebookId: {
        type: String,
    },
    twitterId: {
        type: String,
    },
    githubId: {
        type: String
    }
}, { timestamps: true });

const user = mongoose.model('user', userSchema);

module.exports = user;