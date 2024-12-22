const express = require("express");
const jwt = require("jsonwebtoken");
const Post = require("../models/post");
const User = require("../models/user");

const router = express.Router();

/**
 * Middleware to authenticate the user using JWT in cookies.
 */
const authenticate = (req, res, next) => {
  // Access token from cookies
  const token = req.cookies.token;
  if (!token) {
    console.log("Token is missing. Redirecting to login...");
    return res.redirect("/login");
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error("Invalid token:", err.message);
    res.clearCookie("token"); // Clear the invalid token
    res.redirect("/login");
  }
};

/**
 * Route: GET /
 * Description: Renders the dashboard with a list of posts.
 */
router.get("/", authenticate, async (req, res) => {
  try {
    // Fetch posts and populate author details
    const posts = await Post.find().populate("author");
    res.render("dashboard", { posts, user: req.user }); // Pass user info for dynamic content
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    res.status(500).send("An error occurred while fetching posts.");
  }
});

/**
 * Route: POST /create
 * Description: Creates a new post by the authenticated user.
 */
router.post("/create", authenticate, async (req, res) => {
  const { title, content } = req.body;

  // Validate input
  if (!title || !content) {
    return res.status(400).send("Title and content are required.");
  }

  try {
    // Create and save a new post
    const post = new Post({
      title,
      content,
      author: req.user.id, // The user ID from the decoded JWT
    });
    await post.save();

    console.log("Post created successfully.");
    res.redirect("/");
  } catch (err) {
    console.error("Error creating post:", err.message);
    res.status(500).send("An error occurred while creating the post.");
  }
});

module.exports = router;
