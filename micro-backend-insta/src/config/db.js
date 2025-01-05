const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");

const dbPath = path.join(__dirname, "../users.db"); // Ensure this is the correct path

const initializeDB = async () => {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // Log to ensure we're inside the function
  console.log("Connected to the database");

  // Create tables if they don't exist
  await createTables(db);

  return db;
};

const createTables = async (db) => {
  // SQL queries to create tables if they don't already exist
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      mobile_number TEXT UNIQUE NOT NULL,
      address TEXT,
      post_count INTEGER DEFAULT 0
    );
  `;
  const createPostsTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      user_id INTEGER NOT NULL,
      images TEXT,
      FOREIGN KEY (user_id) REFERENCES users (id)
    );
  `;

  try {
    console.log("Creating tables if they do not exist...");
    // Execute the table creation queries
    await db.run(createUsersTableQuery);
    await db.run(createPostsTableQuery);
    console.log("Tables created or already exist.");
  } catch (error) {
    console.error("Error creating tables:", error.message);
  }
};

module.exports = initializeDB;
