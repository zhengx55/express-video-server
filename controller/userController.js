const { User } = require("../model");

exports.list = async (req, res) => {};

exports.delete = async (req, res) => {};

exports.login = async (req, res) => {};

exports.register = async (req, res) => {
  const userModel = new User(req.body);
  const dbBack = await userModel.save();
  const user = dbBack.toJSON();
  delete user.password;
  res.status(201).json({
    user,
  });
};
