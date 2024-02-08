const express = require("express");
const router = express.Router();
const userCont = require("../controllers/userController");
router.route("/login").post(userCont.getUsers);
router.route("/signup").post(userCont.newUser);
router.route("/").get(userCont.userData);
module.exports = router;
