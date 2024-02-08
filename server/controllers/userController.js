const User = require("../models/User");
exports.getUsers = async (req, res) => {
  try {
    const validate = await User.findOne({ name: req.body.name });
    console.log(req.body, validate);
    if (validate != null) {
      res.send(process.env.CLIENT + "/user/dashboard");
    } else {
      console.log("not found");
    }
  } catch {
    console.log("failed");
  }
};
exports.newUser = async (req, res) => {
  console.log("postuser");
  try {
    const validate = await User.findOne({ name: req.body.name });
    console.log(req.body);
    if (validate != null) {
      console.log("already exists", validate);
    } else {
      const user = new User({ name: req.body.name, password: req.body.password });
      user.save();
      console.log("done");
      res.status(200);
    }
  } catch {
    console.log("failed");
  }
};
exports.userData = async (req, res) => {
  try {
    const validate = await User.findOne({ name: req.query.name });
    console.log(validate);
    if (validate != null) {
      res.setHeader("Content-Type", "application/json");
      res.send(validate);
    } else {
      res.setHeader("Content-Type", "text/plain");
      res.end("Not found");
    }
  } catch {
    console.log("failed");
  }
};
