const express = require("express");
const app = express();

app.use("/home", (req, res) => {
  res.send("Hello World");
});

app.use("/test", (req, res) => {
  res.send("This is the test server");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
