const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// يخلي الموقع يشتغل
app.use(express.static("public"));

let latestData = {
  voltage: 0,
  current: 0
};

// استقبال البيانات من ESP32
app.post("/api/data", (req, res) => {
  latestData = req.body;
  console.log("Data Received:", latestData);
  res.send("OK");
});

// إرسال البيانات للموقع
app.get("/api/data", (req, res) => {
  res.json(latestData);
});

app.listen(3000, () => console.log("Server running"));