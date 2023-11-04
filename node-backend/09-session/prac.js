const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session");

app.set("view engine", "ejs");

app.use(session({
    secret: "secret key",
    resave: false, //모든 요청마다 session을 다시 저장할거냐? 
    saveUninitialized: true, //클라가 처음 접속할 때, 세션을 한 번 초기화 할 건지 말 건지?
    cookie: {
        httpOnly: true, //document.cookie로는 접속 X
        maxAge: 25000,
    },
    //secure: true //https에서만 동작하도록 함 
})
);

app.get("/", (req, res) => {
    res.render("index", {user: req.session.user, userid: req.session.userid})
})

app.get("/login", (req, res) => {
    console.log("1:", req.session);
    //로그인 성공한 시점에 req.session.user에 user를 식별할 수 있는 고유한 값
    req.session.user = "koo";
    req.session.userid = "kookoo@koo.koo";
    console.log("2:", req.session);
    res.send("set session");
})

app.listen(port, () => {
  console.log("Server Port : ", port);
});