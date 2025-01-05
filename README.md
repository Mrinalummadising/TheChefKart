# Micro Backend Instagram

A backend application built with **Express.js** and **SQLite** to manage users and posts for a mini social media platform.

## Features

- User management: Create and retrieve user details.
- Post management: Create, update, delete, and retrieve posts for users.
- Database initialization: Automatically creates required tables in SQLite.
- Modular structure for scalability and maintainability.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [SQLite](https://www.sqlite.org/) (optional for advanced database management)

## Project Structure

```plaintext
project/
├── config/
│   └── db.js               # Database configuration and initialization
├── src/
│   ├── controllers/        # Route logic
│   │   ├── userController.js
│   │   └── postController.js
│   ├── routes/             # API routes
│   │   ├── userRoutes.js
│   │   └── postRoutes.js
│   ├── app.js              # Express app setup
├── users.db                # SQLite database file
├── server.js               # Server entry point
├── .env                    # Environment variables
├── package.json            # Project metadata and dependencies
└── README.md               # Documentation
