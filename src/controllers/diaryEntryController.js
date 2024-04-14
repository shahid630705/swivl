// controllers/diaryEntryController.js
const DiaryEntry = require("../models/diaryEntry");

exports.createEntry = async (req, res) => {
  try {
    const { title, description, location, photos } = req.body;
    const diaryEntry = new DiaryEntry({
      title,
      description,
      location,
      photos,
      user: req.user._id, // assuming user ID is available in req.user after authentication
    });
    await diaryEntry.save();
    res
      .status(201)
      .json({ message: "Diary entry created successfully", diaryEntry });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Implement other controller methods for updating, deleting, and retrieving diary entries.
