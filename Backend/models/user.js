const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  location: String,
  weatherData: [
    {
      date: Date,
      temperature: Number,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
