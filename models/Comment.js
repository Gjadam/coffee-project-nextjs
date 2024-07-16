const mongoose = require('mongoose')
require('./Product')
const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: false
    },
    score: {
        type: Number,
        default: 5,
    },
    isAccept: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: () => Date.now(),
        immutable: false
    },
    productID: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
    },
})

const model = mongoose.models.Comment || mongoose.model('Comment', schema)


export default model