const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    buyStock,
    sellStock,
    getPortfolio
} = require("../controllers/stockController");

// Buy Stock
router.post("/buy", authMiddleware, buyStock);

// Sell Stock
router.delete("/sell/:id", authMiddleware, sellStock);

// View Portfolio
router.get("/portfolio", authMiddleware, getPortfolio);

module.exports = router;