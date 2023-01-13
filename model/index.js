const mongoose = require("mongoose");
async function mongodb() {
  await mongoose.connect("mongodb://localhost:27017/express-video");
}

mongodb()
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.error(err));

module.exports = {
  User: mongoose.model("User", require("./userModel")),
};
