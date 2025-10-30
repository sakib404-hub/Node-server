const express = require("express");
const app = express();
const port = 5001;

app.get("/", (req, res) => {
  res.send("Hellow World From Home!");
});

app.listen(port, () => {
  console.log(`This Application is From Port Number : ${port}`);
});
