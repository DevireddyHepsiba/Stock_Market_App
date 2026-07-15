const express = require("express");
const router = express.Router();

const {
    register,
    login,
    getMe
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Register User
router.post("/register", register);

// Login User
router.post("/login", login);

// Current User
router.get("/me", authMiddleware, getMe);

module.exports = router;