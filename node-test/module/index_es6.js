// 1) math_es2파일에서 default로 export 하고있는 식별자를 add2라는 식별자로 받아옴
//import add2 from "./math_es6.js";
//console.log(add2(2,5));


// 2) 여러개 내보내는 경우 
// import { add, minus } from "./math_es6.js";
// console.log(minus(8,5));

// 3) es6 문법에서 모듈 import 할 때, 구조분해 없이 식별자를 만들어서 받아오는 방법은
//module 파일(math_es6.js)에 default로 export 하는 값이 있어야 함
import math from "./math_es6.js";
console.log(math.add(2,3)); //오류발생!