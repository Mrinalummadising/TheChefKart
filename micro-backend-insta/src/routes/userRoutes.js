const express = require("express");
const router = express.Router();
const { createUserController } = require("../controllers/userController"); // Make sure this is correct

// POST route to create a new user
router.post("/", async (req, res) => {
  const db = req.app.locals.db;
  await createUserController(req, res, db);
});

// GET route to retrieve all users
router.get("/", async (req, res) => {
  const db = req.app.locals.db; // Ensure you're accessing the DB connection correctly
  try {
    const users = await db.all("SELECT * FROM users"); // Get all users from the database
    res.json(users); // Return the users as JSON
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
