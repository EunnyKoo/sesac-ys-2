const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmypage");

//localhost:9000/
router.get("/", controller.home);

//localhost:9000/mypage
router.get("/mypage", controller.mypage);

//localhost:9000/register 
router.get("/register", controller.register);

//회원 등록
router.post("/register", controller.addAccount);

//로그인 해보기
router.get("/login", controller.login);

//아이디 비번 맞아야지 로그인 됨
router.post("/login", controller.correctLogin);

module.exports = router;