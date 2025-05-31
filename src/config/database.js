const mongoose = require("mongoose");

// Aysnchronus connectDB function containg coneection string
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sudhanshutalan302:wcfYpq0fGcehE3up@cluster0.geegori.mongodb.net/"
  );
};

module.exports = connectDB;
