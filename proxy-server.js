import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
const cors = require("cors")({ origin: true });

// Set CORS headers to allow requests from your Vue.js application's origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors);
// Proxy endpoint
app.get("/search", async (req, res) => {
  try {
    const response = await axios.get("https://serpapi.com/search", {
      params: req.query,
    });
    res.send(response.data);
  } catch (error) {
    console.error("Error proxying request:", error);
    res.status(500).send("Internal Server Error");
  }
});
// Proxy endpoint for uploading image
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
