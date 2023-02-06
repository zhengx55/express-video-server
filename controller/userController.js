const { User } = require("../model");
const jwt = require("jsonwebtoken");
const { createToken } = require("../util/jwt");
exports.list = async (req, res) => {};

exports.delete = async (req, res) => {};

/**
 * Login
 * @param {*} req
 * @param {*} res
 */
exports.login = async (req, res) => {
  /*
    1. 数据验证,生成token
    2. 数据库查询
    3. 返回状态
    */
  let db_user = await User.findOne(req.body);
  if (!db_user) {
    res.status(402).json({ error: "Incorrect username or password" });
  }
  db_user = db_user.toJSON();
  db_user.token = await createToken(db_user);
  res.status(200).json(db_user);
};

/**
 * Register
 * @param {*} req
 * @param {*} res
 */
exports.register = async (req, res) => {
  const userModel = new User(req.body);
  const dbBack = await userModel.save();
  const user = dbBack.toJSON();
  res.status(201).json({
    user,
  });
};
