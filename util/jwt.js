const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const tojwt = promisify(jwt.sign);
const verify = promisify(jwt.verify);

/**
 * Verfiy user's jwt token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports.verifyToken = async (req, res, next) => {};

module.exports.createToken = async (userInfo) => {
  return await tojwt({ userInfo }, "4a705797-18c3-4e78-95b7-5a2a1131bd9a", {
    expiresIn: 60 * 60,
  });
};
