const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialize Express app
const app = express();

// Load environment variables
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON requests
app.use(express.json());

// CORS Configuration
const allowedOrigins = [
  "http://localhost:3001",
  "https://theaswadhot.netlify.app", // Add your frontend's live URL
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Import routes for Todo API
const todoRoutes = require("./routes/todos");

// Mount Todo API routes
app.use("/api/v1", todoRoutes);

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Default route
app.get("/", (req, res) => {
  res.send(`<h1>This is the homepage</h1>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
