const Stock = require("../models/Stock");
const Transaction = require("../models/Transaction");

// Buy Stock
exports.buyStock = async (req, res) => {

    try {

        const {
            stockSymbol,
            stockName,
            price,
            count,
            stockExchange
        } = req.body;

        const totalPrice = price * count;

        const stock = await Stock.create({

            userId: req.user.id,
            stockSymbol,
            stockName,
            price,
            count,
            totalPrice,
            stockExchange

        });

        await Transaction.create({

            userId: req.user.id,
            transactionType: "Buy",
            paymentMode: "Virtual Wallet",
            amount: totalPrice

        });

        res.status(201).json(stock);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


// Sell Stock
exports.sellStock = async (req, res) => {

    try {

        const stock = await Stock.findById(req.params.id);

        if (!stock) {
            return res.status(404).json({
                message: "Stock not found"
            });
        }

        await Transaction.create({

            userId: req.user.id,
            transactionType: "Sell",
            paymentMode: "Virtual Wallet",
            amount: stock.totalPrice

        });

        await stock.deleteOne();

        res.json({
            message: "Stock Sold Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


// Portfolio
exports.getPortfolio = async (req, res) => {

    try {

        const stocks = await Stock.find({
            userId: req.user.id
        });

        res.json(stocks);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};