const { getUserByMobile, createUser } = require("../models/userModel");

const createUserController = async (req, res, db) => {
  const { name, mobile_number, address } = req.body;

  try {
    const user = await getUserByMobile(db, mobile_number);

    if (!user) {
      await createUser(db, name, mobile_number, address);
      res.send("User successfully created");
    } else {
      res.status(400).send("User with this mobile number already exists");
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { createUserController };
