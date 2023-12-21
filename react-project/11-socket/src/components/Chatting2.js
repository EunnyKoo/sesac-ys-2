import "../styles/chat.css";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function Chatting2() {
  const [msgInput, setMsgInput] = useState("");
  const [userIdInput, setUserIdInput] = useState("");
  const [chatList, setChatList] = useState([
    {
      type: "my",
      content: "안녕?",
    },
    {
      type: "other",
      content: "응 안녕?",
    },
    {
      type: "notice",
      content: "",
    },
  ]);
  const [userId, setUserId] = useState(null);

  const initSocketConnect = () => {
    console.log("connected", socket.connected);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    // initSocketConnect();
    socket.on("error", (res) => {
      alert(res.msg);
    })

    socket.on("entrySuccess", (res) => {
      setUserId(res.userId);
    })
  }, []);

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: "notice", content: res.msg }];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

  const sendMsg = () => {};

  const entryChat = () => {
    initSocketConnect();
    socket.emit("entry", { userId: userIdInput });
    // [실습 3-2] 고민해보기
    // 바로 userId에 값을 할당하지 않고
    // setUserId(userIdInput);
  };
  return (
    <>
      <div className="section-header">
        <h3>크리스마스 채팅룸</h3>
        <ul>
          <li>🎅 닉네임 입력 후 입장하기</li>
          <li>🎄 닉네임 중복 방지</li>
          <li>❄️ 퇴장 시키기</li>
        </ul>
      </div>

      {userId ? (
        <>
          <div className="welcome-message">{userId}님 환영합니다.</div>
          <div className="chat-container">
            {chatList.map((chat, i) => {
              if (chat.type === "notice") return <Notice key={i} chat={chat} />;
              else return <Chat key={i} chat={chat} />;
            })}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button onClick={sendMsg}>전송</button>
          </div>
        </>
      ) : (
        <>
          <div className="input-container">
            <input
              type="text"
              value={userIdInput}
              onChange={(e) => setUserIdInput(e.target.value)}
            />
            <button onClick={entryChat}>입장</button>
          </div>
        </>
      )}
    </>
  );
}