// netlify/functions/api.js (or whatever you name your function file)

const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

const app = express();

// Serve static files (if you have them in a 'public' folder)
app.use(express.static(path.join(__dirname, "../../public"))); // Adjust path as needed

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public", "index.html")); // Adjust path as needed
});

app.get("/terms-and-conditions", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public", "terms.html")); // Adjust path as needed
});

const router = express.Router();

router.get("/some-api-route", (req, res) => {
  res.json({ message: "Hello from your API!" });
});

app.use("/app/", router);

module.exports.handler = serverless(app);