const { User } = require("../model");

exports.list = async (req, res) => {};

exports.delete = async (req, res) => {};

exports.register = async (req, res, next) => {
  const userModel = new User(req.body);
  const dbStatus = await userModel.save();
  console.log(req.body);
  res.status(201).json(dbStatus);
};
