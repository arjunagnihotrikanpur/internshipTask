const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    hobbies: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Users', UserSchema)