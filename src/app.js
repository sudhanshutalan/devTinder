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

//creating feed api -- getting all users
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(401).send("Something went wrong...");
  }
});

//finding user by id
app.get("/findbyid", async (req, res) => {
  const id = req.body.id;
  try {
    const user = await User.findById(id);
    res.send(user);
  } catch (err) {
    res.status(401).send("Something went wrong");
  }
});

//deleting use by Id
app.delete("/deletebyid", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send(user + "\n\nUser deleted successfully");
  } catch (err) {
    res.status(401).send("Something went wrong..." + err);
  }
});

//update user by Id
app.patch("/updateuser/:id", async (req, res) => {
  const id = req.params?.id;
  const data = req.body;
  try {
    const allowedUpdates = ["gender", "age", "skills"];
    const isUpdateallowed = Object.keys(data).every((k) =>
      allowedUpdates.includes(k)
    );
    if (!isUpdateallowed) {
      throw new Error("Update not allowed");
    }
    if (data?.skills.length > 10) {
      throw new Error("Skills cannot be more than 10");
    }
    const updatedUser = await User.findByIdAndUpdate(id, data);
    res.send("Updated user data");
  } catch (err) {
    res.status(401).send("Something went wrong");
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
