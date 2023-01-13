var { body } = require("express-validator");
const validate = require("./errorBack");
const { User } = require("../../model");
module.exports.register = validate([
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    // proceed if validation pass
    .bail()
    .isLength({ min: 3 })
    .withMessage("Username is 3 characters minimum")
    .bail(),
  body("email")
    .notEmpty()
    .withMessage("Email Address is required")
    .bail()
    .isEmail()
    .withMessage("Invalid email address")
    .bail()
    .custom(async (val) => {
      const emailValidate = await User.findOne({ email: val });
      if (emailValidate)
        return Promise.reject("Email address has already been registered");
    })
    .bail(),
  body("phone")
    .notEmpty()
    .withMessage("手机号不能为空")
    .bail()
    .custom(async (val) => {
      const phoneValidate = await User.findOne({ phone: val });
      if (phoneValidate) {
        return Promise.reject("手机号已被注册");
      }
    })
    .bail(),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .bail()
    .isLength({ min: 5 })
    .withMessage("password is 5 characters minimum")
    .bail(),
]);

module.exports.login = validate([
  body("email")
    .custom(async (val) => {
      const emailValidate = await User.findOne({ email: val });
      if (emailValidate) {
        return Promise.reject("邮箱已经被注册");
      }
    })
    .bail(),
  body("username")
    .custom(async (val) => {
      const nameValidate = await User.findOne({ username: val });
      if (nameValidate) {
        return Promise.reject("用户已经被注册");
      }
    })
    .bail(),
  body("phone")
    .custom(async (val) => {
      const phoneValidate = await User.findOne({ phone: val });
      if (phoneValidate) {
        return Promise.reject("手机已经被注册");
      }
    })
    .bail(),
]);
