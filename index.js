const express = require("express"); //Importing the Express
const app = express(); //Calling the express and making an app
const port = process.env.PORT || 5001; // making parallal choise if i give port number to
//environment variable chose that or the port will be 5001
const cors = require("cors");

app.use(cors());
app.use(express.json());

const users = require("./users.json");

app.get("/", (req, res) => {
  //
  res.send("Hellow World From Home!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Post Method is Called!", req.body);
  const newUser = req.body;
  const lastUser = users[users.length - 1];
  const lastIdNumber = lastUser ? parseInt(lastUser.id.slice(1)) : 0;
  newUser.id = "m" + String(lastIdNumber + 1).padStart(3, "0");
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`This Application is From Port Number : ${port}`);
});
