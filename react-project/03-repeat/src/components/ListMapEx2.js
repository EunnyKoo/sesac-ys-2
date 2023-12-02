import React, { useState } from "react";

function ListMap() {
  const peopleList = [
    { name: "구구콘", email: "koo@koo.koo" },
    { name: "구구콘", email: "koo@koo.koo" },
  ];
  const [list, setList] = useState(peopleList);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const addPerson = () => {
    const newPerson = { name: newName, email: newEmail }; 
    const newList = list.concat(newPerson);
    setList(newList); 
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
        addPerson(); 
    }
  };

  const delPerson = (email) => {
    const newList = list.filter((value) => {
        return value.email !== email;
    });
    setList(newList);
  }

  return (
    <>
      <input
        placeholder="이름"
        type="text"
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        placeholder="이메일"
        type="text"
        value={newEmail}
        onChange={(e) => {
          setNewEmail(e.target.value);
        }}
        onKeyPress={handleOnKeyPress}
      />
      <button onClick={addPerson}>등록</button> 
      <ul>
        {list.map((value) => (
          <h2 style={{cursor: "pointer"}}
          key={value.email} onDoubleClick={() => delPerson(value.email)}>
            {`${value.name} : ${value.email}`}
          </h2>
        ))}
      </ul>
    </>
  );
}

export default ListMap;
