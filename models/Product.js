const mongoose = require('mongoose')
require('./Comment')
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    suitableFor: {
        type: String,
        required: true
    },
    smell: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 5,
    },
    tags: {
        type: [String],
        required: true
    },
    img: {
        type: String,
        required: true
    },
    comments: {
        type: [{
            type: mongoose.Types.ObjectId,
            ref: "Comment",
        }]
    }
})


const model = mongoose.models.Product || mongoose.model('Product', schema)

export default model