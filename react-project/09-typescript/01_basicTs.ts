//let str = "hello";
let str: string = "hello";
let num: number;
num = 5;

console.log(str);

let undif: undefined;
let nu: null = null;

//숫자로 이루어진 배열의 type: number[]
let arr: number[] = [1,2,3,4,5];
console.log(arr[1]);

//문자로 이루어진 배열의 type: string[]
let arrStr: string[] = ["a","bc"];
let arrStr2: Array<string> = ["aa","bcd"];

// number이거나 string이거나 둘 다 된다. 
let numStrArr: (number | string)[] = [1, "a"];
let numStrArr2: (number | string)[] = [1, "a"];
let abc: (number | string) = 'a';
abc = 5;

//어떠한 자료형이든 다 넣을 수 있다. 
//하지만 typescript에서 any를 사용하는 건 지양해야함.
let anyArr: any[] = [1, "eun", null, undefined, {}];

// 예습: interface, type
let obj: object = {
    name: "koo",
}

//Tuple => readonly를 넣으면 읽기만 가능한 data type이 되면서 데이터를 변경할 수 없다.
let drink: [string, number] = ["coke", 200];
console.log(drink[0]);
drink[0] = "cider";
console.log(drink[0]);
//Tuple의 한께: 위처럼 할당하는  건 오류로 잡지만, push 메소드를 이용하면 오류를 잡지 않음
drink.push("yogurt");
console.log(drink); //[ 'cider', 200, 'yogurt' ]

let drink2 : readonly [string, number] = ["coke", 200];
//drink2.push("yogurt"); : 오류 생김

//Enum 사용 개념! 
enum Authority {
    admin = 0,
    user = 1,
    guest = 2
}


let userType = 0;

if( userType == Authority.admin){
    console.log("권리자 기능이 있습니다");
}

enum Cake {
    choco,
    mugwort,
    strawberry,
}

console.log(Cake.choco); //0 출력


enum Cake2 {
    choco="choco",
    mugwort = "mugwort",
    strawberry = "strawberry",
}

console.log(Cake2.choco); //choco 출력

// 1. 아래와 같이 오브젝트, 불리언(boolean) 데이터 타입 순으로 설정하는 튜플 만들어보기
let olimpic_newgame : readonly [object, boolean] = [
    {
      name: "쇼트트랙",
      type: "혼성 계주",
    },
    true,
  ];;

  
//2. olimpic_newgame[1]=false; 를 했을 때 변경되지 않도록 수정할 수 없는 데이터 만들기
olimpic_newgame[1] = false;

