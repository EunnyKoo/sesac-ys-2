const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

//req.body를 해석하기 위한 코드
//x-www-form-urlencoded 형태의 데이터를 해석
app.use(express.urlencoded({extended:true}));
//extended: true일 경우 qs 모듈(외부 모듈)을 이용한다. false일 경우, 내장 모듈인 queryString을 사용한다.
// ~~~~?name=koo

//application/json 형태의 데이터를 해석
app.use(express.json());

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get("/", function (req, res) {
  res.render("index");
});

//get 요청은 url로 접속이 가능하다.
//get 요청은 req.query 데이터가 담겨서 온다.
//데이터 전송 시에 form 태그를 이용할 경우, method를 get으로 해놓으면 get 요청이 됨
//클라이언트가 get 요청으로 데이터를 보낼 때 url에 직접 query를 만들어서 전송이 가능하다. 
//url에 전송되는 데이터가 노출된다. 즉, 개인정보를 위한 전송은 get으로 하지 않는다.
// localhost:8000/get
app.get("/get", function (req, res) {
    console.log(req.query); //{ id: 'dd', pw: 'dd' }
    //req.query: get요청에 대해 client가 보낸 데이터를 담고있다. 
    //url에서 기본 주소 뒤에 오는 ?id=koo&pw=koo 이런 주소를 의미
    //?id=lily&pw=1234(이런게 query임)

    res.send("get 요청 성공!");
});

//localhost:8000/post의 post요청을 받기 위한 준비.
//post 요청에 대한 데이터는 req.body에 담아서 옴
//post요청에 대한 데이터는 rqequ\body에 담아서 옴
//정보가 숨겨짐(url에 노출되지 않움). crdud ㅈㅇ엣 
app.post("/post", function (req, res) {
    console.log(req.body);
    res.send("post 요청 성공");
})

app.post("/post/ver2", function (req, res) {
    console.log(req.body);
    res.render("result.ejs" , {
        name: req.body.name,
        email: req.body.email, 
    });
})

//조회, 데이터 저장, 원래 있던 데이터를 변경하기 위해, 데이터 삭제
// CRUD(Create, Read, Update, Delete)

app.get("/register", function(req,res) {
    console.log(req.query);  //{ id: 'koo', pw: '123', name: '구구콘', email: 'koo@koo' }
    res.send("register 요청 성공");
})

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});