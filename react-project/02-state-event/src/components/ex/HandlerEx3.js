import { useState } from "react";

function HandlerEx3() {
    const [msg, setMsg] = useState("");
    const [btn, setBtn] = useState("보여져라");

    const appearButton = (e) => {
        console.log(e.target);
        setMsg("안녕하세요");
        setBtn("사라져라");
    };

    const hideButton = (e) => {
        console.log(e.target);
        setMsg("");
        setBtn("보여져라");
    };

    return (
        <>
            <h3>이벤트 핸들링 실습3</h3>
            <h1>{msg}</h1>

            {msg === "" ? (
                <button onClick={appearButton}>{btn}</button>
            ) : (
                <button onClick={hideButton}>{btn}</button>
            )}
        </>
    );
}

export default HandlerEx3;