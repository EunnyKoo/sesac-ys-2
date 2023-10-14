const fruits = ["apple", "banana", "cherry"];

const [apple1, banana2="banana2", cherry1, lemon1 = "lemon"] = fruits;
console.log(apple1, lemon1, banana2);

//사실상 아래 코드와 동일한 작업을 하고있음
// const apple1 = fruits[0];
// const banana1 = fruits[1];
// const cherry1 = fruits[2];

let x = 1, y=3;
[x, y] = [y, x];
console.log(x,y); // 3 1 출력됨(두 변수의 값이 치환되쥬?)

const obj = {
    name: "eun",
    gender: "female",
    age: 28
};

//key 이름 바꾸는 방법
const {age, name : name2 } = obj

// const age = obj.age;
// const name = obj.name;
// const gender = obj.gender;

console.log(name2);
console.log(age);

//spread 연산자
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];

// [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"];
// 방법 1: const arr3 = [arr1[0]~~~, arr2[0]~~~]
// 방법 2: for문 사용하기 
// 방법 3: 
const arr3 = [...arr1, ...arr2];
console.log("arr3",arr3);

const hello = [..."hello"];
//hello = "h","e","l","l","o" 이렇게 들어간거임!
console.log("hello",hello);

const word1 = "abc";
const word2 = "xyz";
const word3 = [...word1, ...word2];
console.log(word3);

const obj2 = {
    name: "eun",
    gender: "female",
    age: 28
};
const obj3 = {
    ...obj2, 
    test: "test",
};
console.log(obj3);

//rest 파라미터 
const values = [10,20,30];
function get(a, ...rest){
    console.log(a); //결과는 10
    console.log(rest); //결과는 [ 20, 30 ]
}

get(...values);