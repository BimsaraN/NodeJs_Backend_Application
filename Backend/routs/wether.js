const express = require("express");
const axios = require("axios");
const router = express.Router();
const User = require("../models/user");

// Route to update weather data
router.post("/update-weather/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const location = user.location;
    // Make a request to OpenWeatherMap API to get weather data based on location
    // Store the weather data in the user's weatherData array
    // Save the user with updated weatherData
    await user.save();

    res.status(200).json({ message: "Weather data updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Other weather-related routes

module.exports = router;
