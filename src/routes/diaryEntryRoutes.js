// routes/diaryEntryRoutes.js
const express = require("express");
const router = express.Router();
const diaryEntryController = require("../controllers/diaryEntryController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, diaryEntryController.createEntry);
// Define other routes for updating, deleting, and retrieving diary entries.

module.exports = router;
