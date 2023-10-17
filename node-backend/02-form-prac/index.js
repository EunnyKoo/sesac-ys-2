const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get("/", function (req, res) {
  res.render("getInfo");
});

app.get("/getInfo", function (req, res) {
    console.log(req.query); 
    res.send("get 요청 성공!");
});

app.get("/postInfo", function (req, res) {
    res.render("postInfo");
})

app.post("/postInfo", function (req, res) {
    console.log(req.body);
    res.send("post 요청 성공");
})

app.post("/infoResult", function(req, res) {
    console.log(req.body);
    res.render("infoResult", {
        name: req.body.name
    })
})

app.get("/enroll", function(req, res) {
    res.render("enroll");
})

app.post("/enroll", function (req, res) {
    console.log(req.body);
    res.send("post 요청 성공");
})

app.post("/enroll2", function(req, res) {
    console.log(req.body);
    res.render("enrollComplete", {
        pw: req.body.pw,
        name: req.body.name
    });
})

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });
