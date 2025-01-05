require("dotenv").config();
const initializeDB = require("../micro-backend-insta/src/config/db");
const app = require("./src/app");

const startServer = async () => {
  try {
    // Initialize the database and create tables if they don't exist
    const db = await initializeDB();
    app.locals.db = db; // Store the database connection in the app's locals

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error(`DB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

startServer();
