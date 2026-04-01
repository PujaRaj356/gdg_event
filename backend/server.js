const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server Running");
});

// register
app.post("/register", (req, res) => {
  const newUser = req.body;

  let data = [];

  try {
    data = JSON.parse(fs.readFileSync("data.json"));
  } catch {
    data = [];
  }

  data.push(newUser);

  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

  res.send("User Registered");
});

// get users
app.get("/users", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data.json"));
  res.json(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running on port " + PORT));