import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./store/counterReducer";
import React, { useState } from "react";
import "./App.css";


function AppRedux2() {
  return (
    <div>
      <Bank />
    </div>
  );
}

function Bank() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(parseInt(event.target.value, 10)); 
  };

  const handleDeposit = () => {
    if (inputValue > 0) {
      dispatch(increase(inputValue));
    }
  };

  const handleWithdraw = () => {
    if (inputValue > 0) {
      dispatch(decrease(inputValue));
    }
  };

  return (
    <div className="bank">
      <h2 className="codingBank">코딩온 은행</h2>
      <h3 className="change">잔액: {number}</h3>
      <div className="inputButton">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="입금 또는 출금 금액 입력"
          className="inputNo"
        />
        <button onClick={handleDeposit} className="btn_deposit">입금</button>
        <button onClick={handleWithdraw} className="btn_withdraw">출금</button>
      </div>
    </div>
  );
}

function Box1() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box3 />
    </div>
  );
}

function Box3() {
  return (
    <div className="box">
      <Box4 />
    </div>
  );
}

function Box4() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch(); 

  return (
    <div className="box">
      <h3>number: {number}</h3>
      <button onClick={()=>dispatch(increase())}>plus</button>
      <button onClick={()=>dispatch(decrease())}>minus</button>

      <div>isData: {isData.toString()}</div>
      <button onClick={()=>dispatch({type:'CHANGE'})}>change</button>
    </div>
  );
}

export default AppRedux2;
