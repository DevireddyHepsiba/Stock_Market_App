const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    stockSymbol: {
        type: String,
        required: true
    },

    stockName: {
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

    totalPrice: {
        type: Number,
        required: true
    },

    stockExchange: {
        type: String,
        default: "NASDAQ"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Stock", stockSchema);