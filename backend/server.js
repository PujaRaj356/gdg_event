const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

// 🔥 FORCE CORS FIX (VERY IMPORTANT)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use(cors());
app.use(express.json());

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server Running");
});

// ✅ REGISTER USER
app.post("/register", (req, res) => {
  try {
    const newUser = req.body;

    let data = [];

    // read file if exists
    if (fs.existsSync("data.json")) {
      const file = fs.readFileSync("data.json");
      data = JSON.parse(file);
    }

    data.push(newUser);

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

    res.status(200).json({ message: "User Registered Successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving user" });
  }
});

// ✅ GET USERS
app.get("/users", (req, res) => {
  try {
    if (!fs.existsSync("data.json")) {
      return res.json([]);
    }

    const data = JSON.parse(fs.readFileSync("data.json"));
    res.json(data);

  } catch (error) {
    res.status(500).json({ message: "Error reading users" });
  }
});

// ✅ PORT FIX (RENDER + LOCAL)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});