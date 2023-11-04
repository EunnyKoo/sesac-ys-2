const express = require("express");
const app = express();
const port = 8000;
const cookieparser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieparser()); //쿠키를 해석할 수 있게 해줌.

const cookieConfig = {
    httpOnly: true, //document.cookie로 접근 불가. 서버에서만 쿠키에 접근할 수 있다.   
    maxAge: 25000, //ms 단위로 보존하고자 하는 기간을 설정 
    //expires:"2023-11-04T18:00",
    //path: "/" // "/test" -> localhost:8000/test/~~~~ 
    //secure: true, : https(보안서버에서만 쿠키를 동작하게 한다.)
    //signed: true : 쿠키 암호화 -> req.signedCookies
};

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/2", (req, res) => {
    res.render("index2");
});

app.get("/set", (req, res) => {
    //서버가 쿠키를 만들어서 응답으로 보낸다. 
    //key: key1 / value: value1
    res.cookie("key1", "value1", cookieConfig);
    res.send("set cookie");
});

app.get("/get", (req, res) => {
    console.log("cookie", req.cookies);
    res.send(req.cookies);
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});