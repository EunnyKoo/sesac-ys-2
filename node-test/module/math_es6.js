//es6 문법 사용!
const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const PI = 3.14;

//1) 하나만 내보낼 경우
//module.exports = add
export default add;

//2) 여러개 내보내는 경우
//common js 문법: module.exports = { add, minus };
export {add, minus};
//export default PI;