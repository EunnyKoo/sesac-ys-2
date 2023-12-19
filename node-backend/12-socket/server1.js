const http = require('http');
const express = require('express');
const app = express();
//소켓이 http 모듈로 생성된 서버에서만 동작한다.
//그래서 http 모듈 이용해서 app 연결해서 하나의 서버를 만들었다. 
const server = http.createServer(app);
const PORT = 8000;

const io = require("socket.io")(server);

// 위에 문장을 풀어서 쓰면 아래와 같다! 
// const Socket = require("socket.io");
// const io = Socket(server);

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("client1");
});

io.on("connection", (socket)=>{
    // 콜백함수의 매개변수에 있는 socket 객체 
    // 접속한 클라이언트의 소켓 
    console.log("socket.id:", socket.id);
    
    //on을 이용해 client에서 socket을 이용해서 보내준 데이터를 
    //받을 이벤트로 등록함.
    socket.on("hello", (res)=>{
        //res: socket을 이용해 보내준 데이터 
        console.log(res);
        socket.emit("bye", {msg: "빠이염"});
    });

    socket.on("entry", (res) => {
        console.log(res);
        io.emit("notice", {msg: `${socket.id}님 입장`});
    })

    socket.on("study", (res) => {
        console.log(res);
        io.emit("study", {msg: "공부하셈"});
    })
});

server.listen(PORT, () => {
  console.log('Server Port : ', PORT)
});
