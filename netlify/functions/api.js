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

app.use("/app/", router);

module.exports.handler = serverless(app);