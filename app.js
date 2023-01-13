var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cors = require("cors");
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var { MongoClient } = require("mongodb");
var router = require("./routes");

var app = express();

const client = new MongoClient("mongodb://127.0.0.1:27017");
const main = async () => {
  const db = client.db("mytest");
  const collection = db.collection("cc");
  const data = await collection.find();
  console.log(await data.toArray());
};
main().finally(() => {
  client.close();
});
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(morgan("dev"));
app.use("api/v1", router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
