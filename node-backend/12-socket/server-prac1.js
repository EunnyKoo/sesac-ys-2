const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
const PORT = 8000;

//cors 이슈 : 다른 서버에서 보내는 요청을 제한함
const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket)=>{
   console.log("socket id", socket.id);
   socket.on("hello", (res)=>{
    console.log(res);
    socket.emit("resHello", {msg:"안녕하세요~"});
   })
});

server.listen(PORT, () => {
  console.log('Server Port : ', PORT)
});
