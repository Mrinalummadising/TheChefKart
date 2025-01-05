const getUserByMobile = async (db, mobile_number) => {
  return await db.get(`SELECT * FROM users WHERE mobile_number = ?`, [
    mobile_number,
  ]);
};

const createUser = async (db, name, mobile_number, address) => {
  return await db.run(
    `INSERT INTO users (name, mobile_number, address, post_count) VALUES (?, ?, ?, 0)`,
    [name, mobile_number, address]
  );
};

module.exports = { getUserByMobile, createUser };
