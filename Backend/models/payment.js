const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const paymentSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        address2: {
            type: String,
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipCode: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true,
        }
    }
)

module.exports = mongoose.model("Payment", paymentSchema)