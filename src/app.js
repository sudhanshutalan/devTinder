const express = require("express");
const app = express();

// app.use("/", (req, res, next) => {
//   console.log("handling main route");
//   // res.send("Main home route");
//   next();
// });

// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the user route");
//     // res.send("user route 1");
//     next();
//   },
//   (re, res, next) => {
//     console.log("handling user route 2");
//     res.send("user route 2");
//     next();
//   }
// );

const { adminAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

app.get("/admin/deleteuser", (req, res) => {
  res.send("User deleted successfully");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
