const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        default: 'کاربر باریستا',
    },
    email: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: "USER"
    },
    refreshToken: String
})


const model = mongoose.models.User || mongoose.model('User', schema)

module.exports = model