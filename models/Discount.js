const mongoose = require('mongoose')
require('./Product')
const schema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    percent: {
        type: Number,
        required: true
    },
    maxUse: {
        type: Number,
        required: true
    },
    uses: {
        type: Number,
        default: 0
    },
},
    {
        timestamps: true
    }
)

const model = mongoose.models.Discount || mongoose.model("Discount", schema)

export default model