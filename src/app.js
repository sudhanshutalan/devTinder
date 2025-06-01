const express = require("express");
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log(req.body);

  // creating a new instance of the user model
  const user = new User(req.body);

  // creating a instance of user model
  // const user = new User(userObj)

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user :" + err.message);
  }
});

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
