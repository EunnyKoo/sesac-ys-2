import { useEffect, useState } from "react";

function LifeCycleFunc(props) {
    const {number} = props;
    const [text, setText] = useState('');
    
    //useEffect(콜백함수, 의존성 배열)
    
    //1. 의존성 배열이 빈 배열일 경우 (mount시에 콜백함수 실행시킴)
    //콜백함수 내부에서 return 뒤에 오는 함수를 unmount시에 실행시킴
    useEffect(()=>{
        console.log("function component : 👽 mount");

        return () => {
            console.log("function component : 😶‍🌫️ unmount");
        }
    }, []);

    //2. 의존성 배열을 전달하지 않을 경우 (mount & update시에 콜백함수를 실행시킴)
    useEffect(()=>{
        console.log("function component : 👻 update")
    });

    //3. 의존성 배열의 원소가 존재할 경우 (해당 원소가 update될 때 마다 콜백함수 실행)
    useEffect(()=>{
        console.log("function component : 🤖 text update")
    }, [text]);

    return (
        <>
            <h2>함수형 컴포넌트 LifeCycle 공부</h2>
            <div>{number}</div>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }}></input>
        </>
    )
}

export default LifeCycleFunc;