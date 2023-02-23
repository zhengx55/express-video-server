const mongoose = require("mongoose");
const { mongoPath } = require("../config/config.default");
async function mongodb() {
  await mongoose.connect(mongoPath);
}

mongodb()
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.error(err));

module.exports = {
  User: mongoose.model("User", require("./userModel")),
};
