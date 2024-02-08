const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: { type: String },
  password: { type: String, min: 1 },
});
const User = mongoose.model("employees", user);
module.exports = User;
