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
app.post("/resume", async (req, res) => {
  try {
    // Extract image data from the request body
    const { blob } = req.body;

    // Create FormData object and append image data
    const formData = new FormData();
    formData.append("image", blob, "image.png");

    // Set headers for the request
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    // Make the POST request to the target endpoint
    const response = await axios.post(
      "https://us-central1-register-555aa.cloudfunctions.net/summaryAPI/upload-image",
      formData,
      config
    );

    // Send the response from the target endpoint back to the client
    res.send(response.data);
  } catch (error) {
    console.error("Error proxying request:", error);
    res.status(500).send(error);
  }
});
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
