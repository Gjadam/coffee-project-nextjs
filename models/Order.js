const { default: mongoose } = require("mongoose");
require("./User")

const schema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    cart: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            count: {
                type: Number,
                required: true
            },
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
},
    {
        timestamps: true
    }
)

const model = mongoose.models.Order || mongoose.model("Order", schema)

export default model