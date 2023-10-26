const express = require("express");
const app = express();
const PORT = 8888;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router, controller, model, view
//1. router 분리 (요청을 정의) -> 완료
//2. controller 분리 (요청에 대해 데이터 처리, view render)
//3. model 분리 (db에 접근하여 데이터를 select, insert, update, delete)

const router = require("./routes/user");  
app.use("/user", router);
//localhost:7777/user/~~~


app.get("*", function(req, res){
    res.send("페이지를 찾을 수 없습니다.");
});

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });