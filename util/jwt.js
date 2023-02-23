const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const tojwt = promisify(jwt.sign);
const verify = promisify(jwt.verify);
const { uuid } = require("../config/config.default");
/**
 * Verfiy user's jwt token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports.verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  token ? token.split("Berarer ")[1] : null;
  if (!token) {
    res.status(402).json({ error: "Token info not found" });
  }
  try {
    const userInfo = await verify(token, uuid);
    next();
  } catch (error) {
    res.status(402).json({ error: "Invalid token" });
  }
  next();
};

module.exports.createToken = async (userInfo) => {
  return await tojwt({ userInfo }, uuid, {
    expiresIn: 60 * 60,
  });
};
