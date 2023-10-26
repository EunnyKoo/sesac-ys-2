const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*[before]
app.get("/", function (req, res) {
    res.render("index");
  });
*/

//const router = require("./routes/index"); 
//index.js를 불러오고 싶다면 폴더 이름까지만 접근해도 됨.
//폴더 이름까지만 접근해도 index.js를 불러온다.
const router = require("./routes");  
app.use("/", router);
//localhost:8000/~~~

//존재하지 않는 get 요청에 대해서 처리해줌! 위치도 중요함: 젤 마지막이어야겠쥬?
app.get("*", function(req, res){
    res.send("페이지를 찾을 수 없습니다.");
});

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });