const createPost = async (req, res, db) => {
  const { title, description, user_id, images } = req.body;

  try {
    // Check if the user exists
    const user = await db.get("SELECT * FROM users WHERE id = ?", [user_id]);
    if (!user) {
      return res.status(400).send("User not found");
    }

    // Create the post
    await db.run(
      "INSERT INTO posts (title, description, user_id, images) VALUES (?, ?, ?, ?)",
      [title, description, user_id, JSON.stringify(images)]
    );

    // Update the user's post count
    await db.run("UPDATE users SET post_count = post_count + 1 WHERE id = ?", [
      user_id,
    ]);

    res.send("Post successfully created");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

const getAllPosts = async (req, res, db) => {
  try {
    const posts = await db.all("SELECT * FROM posts");
    res.send(posts);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

const getPostsByUser = async (req, res, db) => {
  const { userId } = req.params;

  try {
    const posts = await db.all("SELECT * FROM posts WHERE user_id = ?", [
      userId,
    ]);
    res.send(posts);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

const updatePost = async (req, res, db) => {
  const { postId } = req.params;
  const { title, description, images } = req.body;

  try {
    await db.run(
      "UPDATE posts SET title = ?, description = ?, images = ? WHERE id = ?",
      [title, description, JSON.stringify(images), postId]
    );
    res.send("Post successfully updated");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

const deletePost = async (req, res, db) => {
  const { postId } = req.params;

  try {
    await db.run("DELETE FROM posts WHERE id = ?", [postId]);
    res.send("Post successfully deleted");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostsByUser,
  updatePost,
  deletePost,
};
