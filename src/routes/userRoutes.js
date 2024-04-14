// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.register);
// Define other routes for login, profile management, etc.

module.exports = router;
