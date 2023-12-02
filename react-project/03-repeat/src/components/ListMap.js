import React, { useState } from "react";

function ListMap() {
  const productList = [
    { id: 1, product: "가방" },
    { id: 2, product: "패딩" },
    { id: 3, product: "신발" },
    { id: 4, product: "상의" },
    { id: 5, product: "하의" },
  ];
  const [list, setList] = useState(productList);
  const [newProduct, setNewProduct] = useState("");

  const addProduct = () => {
    const newObj = { id: list[list.length-1].id + 1, product: newProduct };
    const newList = list.concat(newObj);
    setList(newList);
    setNewProduct("");
  };

  const delProduct = (id) => {
    //더블클릭한 상품에 대해서 삭제를 해야함
    //filter 메소드는 앞에 있는 배열에 대해서 반복
    //filter 메소드의 return 값은 조건이 되어야 함.
    //조건이 true일 경우, 해당 원소는 새로운 배열에 포함.
    //조건이 false일 경우, 해당 원소는 새로운 배열에 포함하지 않음 
    const newList = list.filter((value) => {
      return value.id !== id; 
    });
    setList(newList);
  };

  return (
    <>
      <label>추가할 상품: </label>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => {
          setNewProduct(e.target.value);
        }}
      />
      <button onClick={addProduct}>추가</button>
      <ul>
        {list.map((value) => {
          return (
            <li style={{cursor: "pointer"}}
             key={value.id} onDoubleClick={() => delProduct(value.id)}>
              {value.product}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListMap;
