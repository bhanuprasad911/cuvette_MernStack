const { User } = require("../models/userModels");

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
module.exports = {
  getUser,
  addUser
};
