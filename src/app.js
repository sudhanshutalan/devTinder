const express = require("express");
const connectDB = require("./config/database.js");

const app = express();
const port = 3000;
// calling connectDB function and handling promises
connectDB()
  .then(() => {
    console.log("Connection successful");
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Connection unsuccessful. Some error occured....");
  });
