const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Define a function to send weather reports
const sendWeatherReport = async (email, weatherData) => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Hourly Weather Report",
    text: `Today's weather: ${weatherData}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Weather report sent successfully");
  } catch (error) {
    console.error("Error sending weather report:", error);
  }
};

module.exports = sendWeatherReport;
