// Generic
// 선언할 때 type을 지정하는데, 
// 사용하다보면 다양한 타입에 대해서 처리를 해줘야 할 수 있음.
// 호출하거나 사용할 때 type을 넘겨서 해당 타입으로 지정할 수 있는 방법
function printXY(x:number, y:number): void;
function printXY(x:string, y:string): void;


function printXY(x: number | string | object, y: number | string | object) {
    console.log(x,y);
}

printXY(5,9);
printXY("a","vb");
// printXY("a",2);

function printXYByGeneric<T>(x: T, y: T) {
    console.log(x,y);
}

printXYByGeneric<string>("dan", "eun");

const numArrLength = (arr: number[]) => arr.length

function StrArrLength(arr: string[]): number {
    return arr.length;
}

// 만약 객체 배열, 이 외 다른 타입의 배열도 length를 구하는 함수를 만들고 싶다면?

function arrLength<T>(arr: T[]): number {
    return arr.length;
}

arrLength<string>(["a", "b"]);

function exampleGeneric<T, U>(x: T, y: U) {
    console.log(x, y)
}

exampleGeneric<string, number>("a", 1);

let a: string[]
let b: Array<string>

interface Phone<T> {
    company: string,
    model: string,
    option: T
}

interface SamsungOption {
    a: string,
    b: number
}

const samsung23: Phone<SamsungOption> = {
    company: "samsung",
    model: "samsungs23",
    option: {
        a: "",
        b: 2
    }
} 

interface AppleOption {
    c: number,
    d: number
}

const iphone15: Phone<AppleOption> = {
    company: "apple",
    model: "iphone15",
    option: {
        c: 3,
        d: 9
    }
} 


// 제너릭 이용해서 함수 arrElement 선언, 
// 배열과 인덱스 번호를 매개변수로 받고, Arr[index]에 대한 요소를 리턴하는 함수 만들기
// 함수의 리턴 타입까지 작성하기
function arrElement<T>(Arr: T[], index: number) {
    return Arr[index];
}

console.log("예시1", arrElement<string>(["a"], 0));

// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!
function arrElement2<T>(Arr: T[], index: number) {
    if(Arr.length > index ){
        return false;
    }else{
        return true;
    }
}
console.log(arrElement2<string>(['a'], 0)); // false
console.log(arrElement2<string>(['avvvv'], 6)); //true