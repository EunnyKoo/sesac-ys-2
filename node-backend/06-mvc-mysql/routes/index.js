const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

//localhost:9000/
router.get("/", controller.home);

//localhost:9000/
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 수정
//router.patch("/visitor/:id", controller.deleteVisitor);

// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

module.exports = router;