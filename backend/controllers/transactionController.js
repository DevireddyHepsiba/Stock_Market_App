const Transaction = require("../models/Transaction");

// Transaction History

exports.getTransactions = async (req, res) => {

    try {

        const transactions = await Transaction.find({

            userId: req.user.id

        }).sort({

            createdAt: -1

        });

        res.json(transactions);

    } catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};