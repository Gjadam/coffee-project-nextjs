const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // pattern: /email/g,
    },
    message: {
        type: String,
        required: true
    },
})

const model = mongoose.models.Contact || mongoose.model("Contact", schema)

export default model