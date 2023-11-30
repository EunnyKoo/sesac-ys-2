import { useState } from "react";

function EventFunc() {
    const [msg, setMsg] = useState("how to say hello..");

    const handleClick = (e) => {
        console.log(e.target);
        setMsg("hola");
    };

    function holiback() {
        setMsg("hoi hoi");
    }

    const handleClickTest = (message) => {
        setMsg(message);
    }

    const [name, setName] = useState("what is your name?");

    const handleEnter = (e) => {
        console.log(e)
        if(e.key == "Enter") {
            console.log("엔터를 눌렀습니다!");
        }
    }

    return (
        <>
            <h3>함수형 컴포넌트 event handling 공부</h3>
            <div>{msg}</div>
            <button onClick={handleClick}>스페인어</button>
            <button onClick={holiback}>네덜란드어</button>

            {/* 함수에서 매개변수를 받고싶으면 어떻게 하나요? */}
            {/* 방법1. onClick에서 익명함수를 선언하고, 그 내부에서 함수를 실행시킨다. */}
            <button onClick={() => { handleClickTest("안녕") }}>한국어</button>

            {/* 방법2. bind를 이용한다. */}
            {/* bind의 첫 번째 매개변수는 . 앞에 있는 함수(handleClickTest)의 this를 결정 */}
            {/* 두 번째 인자로 원하는 값을 넘겨주면 된다. */}
            <button onClick={handleClickTest.bind(null,"hello")}>영어</button>
            <hr />

            
            {/* input 태그에서 엔터를 누르면 "엔터를 눌렀습니다!" 라는 문구가 콘솔에 찍히게 하기 */}
            <input type="text" 
            value={name} 
            onChange={(e) => {
                console.log(e.target);
                setName(e.target.value);
            }} 
            onKeyDown={handleEnter}/>
        </>
    );
}

export default EventFunc;