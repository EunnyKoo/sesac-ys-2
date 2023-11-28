import React from "react";
import image192 from "./logo192.png";

function FuncComponent() {
  const text = "hello";
  const name = "dan";

  const ifRenderTest = () => {
    if (name === "eun") {
      return <div>안녕</div>;
    } else if (name === "dan") {
      return "hoi hoi";
    } else {
      return "...who are you?";
    }
  };

  return (
    <>
      {/* 1. 하나의 태그로 감싸서 return */}
      <div>함수형 컴포넌트입니다1</div>
      <div>함수형 컴포넌트입니다2</div>

      {/* 2. js 문법 사용 가능 */}
      <h3>eunny {text}</h3>

      {/* 3. js 문법 사용 가능(삼항 연산자 조건에 따른 렌더링)  */}
      <div className="App">
        <span>{name}</span>
        <span>
          {name === "danny" ? (
            <div>
              <h2>환영합니다.</h2>
            </div>
          ) : (
            <div>
              <h2>who are you?</h2>
            </div>
          )}
        </span>
      </div>
      {/* 3-1. 복잡한 조건을 이용하고 싶다면? -> 위에서 복잡한 함수를 만들어서 사용한다.  */}
      <div>{ifRenderTest()}</div>

      {/* 3-2. 조건에 따른 렌더링 ( && )  */}
      <h3>{name === "dan" && "안녕하세요!"}</h3>

      {/* 4. inline style 적용 방법: style 속성값으로 객체 전달 */}
      <div style={{ fontSize: "20px", color: "pink" }}>Dan is coming!</div>

      {/* 5. class 대신 className, 
      html에서는 onclick="함수()" 함수를 "호출", 
      but js에서는 함수를 "선언" 
      onClick={() => {}} */}
      <button
        className="test-css"
        onClick={() => {
          console.log("diet");
        }}
      >
        yes
      </button>

      {/* 6. 종료 태그 필수~! */}
      <br />
      {/* 7. / 최상위 경로가 public 폴더 안이다. */}
      <img src="/logo512.png" style={{ width: "100px" }} />

      {/* 7-2. src 내부의 이미지 사용할 경우 -> 위에서 이미지를 import 해오기 */}
      <img src={image192} />
    </>
  );
}

export default FuncComponent;
