require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser"); // Added cookie-parser for JWT
const morgan = require("morgan"); // Optional: for logging requests
const helmet = require("helmet"); // Optional: for security headers
//const port=3000
const app = express();

// Set up EJS view engine
app.set("view engine", "ejs");

// Middleware to parse URL-encoded data and cookies
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Added cookie-parser middleware

// Security: Use helmet to set secure HTTP headers
app.use(helmet());

// Logging: Using morgan to log requests
app.use(morgan("tiny")); // Logs incoming requests (in the "tiny" format)

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes for authentication and posts
app.use("/", require("./routes/auth"));
app.use("/posts", require("./routes/post"));

// Basic route for the home page
app.get("/", (req, res) => {
  res.render("index");
});

// 404 Error handling if the user tries to access an undefined route
app.use((req, res, next) => {
  res.status(404).send("Sorry, the page you are looking for does not exist.");
});

// General error handling middleware
app.use((err, req, res, next) => {
  console.error("Error: ", err);
  res.status(500).send("Something went wrong!");
});

// Listen on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
