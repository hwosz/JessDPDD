// netlify/functions/api.js

const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "../../public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public", "index.html"));
});

app.get("/terms-and-conditions", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public", "terms.html"));
});

const router = express.Router();

router.get("/some-api-route", (req, res) => {
  res.json({ message: "Hello from your API!" });
});

app.use("/app/", router);

module.exports.handler = serverless(app);