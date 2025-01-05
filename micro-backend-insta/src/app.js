const express = require("express");
const userRoutes = require("./routes/userRoutes"); // Ensure this path is correct
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Register the user routes to handle requests at /users
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

module.exports = app;
