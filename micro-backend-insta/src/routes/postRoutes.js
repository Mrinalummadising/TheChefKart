const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostsByUser,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

router.post("/", async (req, res) => {
  const db = req.app.locals.db;
  await createPost(req, res, db);
});

router.get("/", async (req, res) => {
  const db = req.app.locals.db;
  await getAllPosts(req, res, db);
});

router.get("/:userId", async (req, res) => {
  const db = req.app.locals.db;
  await getPostsByUser(req, res, db);
});

router.put("/:postId", async (req, res) => {
  const db = req.app.locals.db;
  await updatePost(req, res, db);
});

router.delete("/:postId", async (req, res) => {
  const db = req.app.locals.db;
  await deletePost(req, res, db);
});

module.exports = router;
