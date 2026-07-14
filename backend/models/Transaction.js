const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    transactionType: {
        type: String,
        enum: ["Buy", "Sell"],
        required: true
    },

    paymentMode: {
        type: String,
        default: "Virtual Wallet"
    },

    amount: {
        type: Number,
        required: true
    },

    time: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Transaction", transactionSchema);