const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

//localhost:7777/user
router.get("/", controller.main);

//localhost:7777/user/login (post)
router.post("/login", controller.login);
router.get("/login", controller.login2)

//localhost:7777/user/register (post)
router.post("/register", controller.register);
router.get("/register", controller.register2);

module.exports = router;