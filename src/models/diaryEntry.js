const mongoose = require("mongoose");

const diaryEntrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  location: { type: String, required: true },
  photos: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const DiaryEntry = mongoose.model("DiaryEntry", diaryEntrySchema);

module.exports = DiaryEntry;
