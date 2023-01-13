exports.list = async (req, res) => {};

exports.delete = async (req, res) => {};

exports.register = async (req, res, next) => {
  res.send("test");
  next();
};
 