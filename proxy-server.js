import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
const cors = require("cors")({ origin: true });

// Set CORS headers to allow requests from your Vue.js application's origin
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
