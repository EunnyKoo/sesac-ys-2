import React, { useState, useRef } from "react";

function ListMap() {
  const peopleList = [
    { id: "1", name: "구구콘", content: "신나는 토요일" },
  ];
  const [list, setList] = useState(peopleList);
  const [newName, setNewName] = useState("");
  const [newContent, setNewContent] = useState("");

  const input1 = useRef();
  const input2 = useRef();

  const addPerson = () => {
    if(input1.current.value === ""){
      input1.current.focus();
    }else if(input2.current.value === ""){
      input2.current.focus();
    }else {
      const newPerson = { id: list.length+1, name: newName, content: newContent }; 
      const newList = list.concat(newPerson);
      setList(newList); 
    }
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
        addPerson(); 
    }
  };

  const delPerson = (id) => {
    const newList = list.filter((value) => {
        return value.id !== id;
    });
    setList(newList);
  }

  return (
    <>
        작성자:&nbsp; 
      <input
        ref={input1}
        placeholder="이름"
        type="text"
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      &nbsp; &nbsp;제목:&nbsp; 
      <input
        ref={input2}
        placeholder=""
        type="text"
        value={newContent}
        onChange={(e) => {
          setNewContent(e.target.value);
        }}
        onKeyPress={handleOnKeyPress}
      />
      &nbsp;
      <button onClick={addPerson}>작성</button> 
      <br /><br/>

        <select >
            <option >작성자</option >
            <option >제목</option >
        </select >
        &nbsp; 
        <input 
        placeholder="검색어"
        type="text"
        value2={newContent}
        onChange={(e) => {
            setNewContent(e.target.value2);
        }}/>

        &nbsp; 
        <button>검색</button>
        <button>전체</button>
        
        <br/>
        <br/>
        <div>새로운 글</div>
        <table border={1} style={{cursor: "pointer"}}>
            <tr>
                <th>번호</th>
                <th>작성자</th>
                <th>제목</th>
            </tr>
        {list.map((value) => (
            <tr key={value.id}  onDoubleClick={() => delPerson(value.id)}>
                <td>{`${value.id}`}</td>
                <td>{`${value.name}`}</td>
                <td>{`${value.content}`}</td>
            </tr>
        ))}
        </table>

        <hr />

        
    </>
  );
}

export default ListMap;
