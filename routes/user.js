const express = require("express")
const { register, getAllUsers }  = require("../controllers/user")

const router = express.Router()

router.route("/register").post(register);

router.route("/users").get(getAllUsers);

module.exports = router;