const createPost = async (db, title, description, user_id, images) => {
  await db.run(
    "INSERT INTO posts (title, description, user_id, images) VALUES (?, ?, ?, ?)",
    [title, description, user_id, JSON.stringify(images)]
  );
  await db.run("UPDATE users SET post_count = post_count + 1 WHERE id = ?", [
    user_id,
  ]);
};

module.exports = { createPost };
