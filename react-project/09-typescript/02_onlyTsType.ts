import { NumberLiteralType } from "typescript";

// or
type gender = 'Men' | 'Women';
const dan: gender = "Men"; 

//[상품명, 상품가격]
type productInfo = [string, number];
const cola: productInfo = ["yogurt", 2500];

//객체에 대한 타입을 지정할 경우
interface ProductInfo2 {
    productName: string,
    productPrice: number
}
// const cider: ProductInfo2 = {productName: "cider", productPrice: 2500, sale: 10 };

type ProductInfo3 = {
    name: string,
    price: number,
    sale?: number  //sale: number | undefined 라고 작성해도 됨! 
}
//sale? 을 쓰면 값이 있어도 되고 없어도 됨!!! (optional)
const cider: ProductInfo3 = {name: "cider", price: 2500}; 
console.log(cider.sale);

interface Seller {
    name: string
}

interface ProductInfo4 {
    name: string,
    price: number,
    sale?: object,
    Seller?: Seller,
}
const soju: ProductInfo4 = {
    name: "soju",
    price: 1000,
    Seller: {name: "KOO"}
}

//옵셔널 체이닝 
console.log(soju.Seller?.name);
// soju.Seller -> seller는 optional한 key -> undefined가 될 수 있음 
// undefined에는 aaa 함수 or 속성이 없습니다. 

interface Person {
    name: string;
    age: number;
}

interface Student extends Person{
    id: string;
    eat: (aa: number) => void;
}

const person: Person = {name: "dan", age: 30};

const student: Student = {
    name: "dan", 
    age: 30, 
    id: "old", 
    eat: () => console.log("밥을 먹는다")
};
console.log(student);

interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
  }
  
  let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
  }