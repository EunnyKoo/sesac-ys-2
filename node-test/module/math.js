// ----------------- case 2), 3) ---------------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
module.exports.add = (a, b) => a + b;
module.exports.minus = (a, b) => a - b;
module.exports.PI = 3.14;
// {
//   add,
//   minus,
//   PI,
// };

// ----------------- case 2), 3) ---------------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// module.exports = {
//   add,
//   minus,
//   PI,
// };

// ----------------- case 1) ---------------
// 파일에서 한개의 식별자만 내보내는 경우
// module.exports = add;

// const data = {
//   add: add,
//   minus: minus,
//   PI: PI
// }

// {
//   name: "lily";
//   gender: "여";
// }

// const add2 = (a, b) => {
//   return a + b;
// };