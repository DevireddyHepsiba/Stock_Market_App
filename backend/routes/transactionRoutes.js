const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getTransactions
} = require("../controllers/transactionController");

// Transaction History
router.get("/", authMiddleware, getTransactions);

module.exports = router;