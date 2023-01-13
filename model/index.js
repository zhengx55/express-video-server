const mongoose = require("mongoose");
async function mongodb() {
  await mongoose.connect("mongodb://localhost:27017/mytest");
}

mongodb()
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.error(err));
