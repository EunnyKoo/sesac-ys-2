import { useState } from "react";

function HandlerEx4() {
  const [fruit, setFruit] = useState("복숭아");
  const [backColor, setBackColor] = useState("블루");
  const [color, setColor] = useState("화이트");
  const [msg, setMsg] = useState("");
  const [img, setImg] = useState("");

  const clickFruit = (e) => {
    setFruit(e.target.value);
    let newImg = "";
    if (e.target.value === "peach") {
      newImg = "./peach.jpg";
    } else if (e.target.value === "apple") {
      newImg = "./apple.avif";
    } else if (e.target.value === "lemon") {
      newImg = "./lemon.jpg";
    } else {
      newImg = "./grape.avif";
    }
    setImg(newImg);
  };

  const clickBackColor = (e) => {
    setBackColor(e.target.value);
    let backColor = "";
    if (e.target.value === "blue") {
        backColor = "blue";
      } else if (e.target.value === "lime") {
        backColor = "lime";
      } else if(e.target.value === "black") {
        backColor = "black";
      } else {
        backColor = "pink";
      }
  };

  const clickColor = (e) => {
    setColor(e.target.value);
    let color = "";
    if (e.target.value === "white") {
        color = "white";
      } else if (e.target.value === "yellow") {
        color = "yellow";
      } else if(e.target.value === "blue") {
        color = "blue";
      } else {
        color = "black";
      }
  };

  const updateMsg = (e) => {
    setMsg(e.target.value);
  };

  return (
    <>
      <h3>이벤트 핸들링 실습4</h3>

      과일&nbsp;
      <select onChange={clickFruit} value={fruit}>
        <option value="peach">복숭아</option>
        <option value="apple">사과</option>
        <option value="lemon">레몬</option>
        <option value="grape">포도</option>
      </select> <br />

      배경색&nbsp;
      <select onChange={clickBackColor} value={backColor}>
        <option>{backColor}</option>
        <option value="pink">핑크</option>
        <option value="lime">라임</option>
        <option value="black">블랙</option>
      </select> <br />

      글자색&nbsp;
      <select onChange={clickColor} value={color}>
        <option>{color}</option>
        <option value="yellow">옐로</option>
        <option value="blue">블루</option>
        <option value="black">블랙</option>
      </select> <br />

      내용&nbsp; <input onChange={updateMsg} /> <br />

      <img src={img} alt="selected fruit" />
      <h1>{msg}</h1>
    </>
  );
}

export default HandlerEx4;
