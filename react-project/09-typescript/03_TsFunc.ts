//함수 자체의 type -> 함수가 실행되어 결국 return되는 값
function sum(a: number, b: number): number {
    return a + b;
    // return "hello" return되는 값을 number로 지정해서 이렇게 하면 오류뜸! 
};

console.log(sum(2,5));

//옵셔널 매개변수 
const sum1 = (a: number, b?: number): number => {
    if(b) return a + b;
    return a;
};

// 첫 번째 오버로딩: 매개변수가 없을 때
function hello(): void;

// 두 번째 오버로딩: 매개변수가 문자열일 때
function hello(str: string): string;

// 실제 함수 구현
function hello(a?: string, b?: string): void | string {
  if (a && b) {
    // 여기에 두 문자열을 처리하는 코드 추가
  } else {
    // 여기에 매개변수가 없거나 하나인 경우를 처리하는 코드 추가
  }
}

interface Calculator {
    sum: (a:number, b:number) => number
    sub?: () => void
}

const calc: Calculator = {
    sum: sum
}

//never: 함수의 끝에 도달할 수 없을 때 사용
function goingOn(): never {
    while(true) {
        console.log("go");
    }
}


function sum2(a: number, b: number) {
    return a + b;
};


// 두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 sum2 만들기
console.log(sum2(5, 11)); // 테스트는 이렇게 하기!


// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum3
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기
function sum3(...numbers: number[]): number {
    let result = 0;
    for (const num of numbers) {
        result += num;
    }
    return result;
}

// 테스트는 이렇게!
console.log(sum3(1, 2, 3, 4, 10)); // 20

