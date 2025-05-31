const mongoose = require("mongoose");

// Aysnchronus connectDB function containg coneection string
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sudhanshutalan302:wcfYpq0fGcehE3up@cluster0.geegori.mongodb.net/"
  );
};

// calling connectDB function and handling promises
connectDB()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.error("Connection unsuccessful. Some error occured....");
  });
