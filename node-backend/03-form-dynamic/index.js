const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/ajax", function (req, res) {
  console.log(req.query);
  // { key: value, key: value }
  res.send(req.query);
});

app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/fetch", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/login2", function (req, res) {
    console.log(req.query);
    res.send(req.query);
});

app.get("/naver/login", function(req,res) {
  res.render("naverLogin");
})

app.post("/login3", function (req, res) {
  // 클라이언트에서 전송한 ID와 비밀번호를 요청에서 가져옵니다.
  const clientID = req.body.id;
  const clientPW = req.body.pw;

  const serverID = "koo";
  const serverPW = "55555";
  
  if (clientID === serverID && clientPW === serverPW) {
   res.send("success");
  }else res.send("failed");
  });

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});