const mongoose = require("mongoose");
const md5 = require("md5");
module.exports = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    required: true,
    set: (value) => md5(value),
    select: false,
  },
  avatar: {
    type: String,
    required: false,
    default: null,
  },
  addTime: {
    type: Date,
    default: Date.now(),
  },
  updateTime: {
    type: Date,
    default: Date.now(),
  },
});
