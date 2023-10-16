class House {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        console.log(`이 건물은 ${new Date().getFullYear()-this.year}년 전에 건축됨.`)
    };
}

const house1 = new House("뽀또랜드",2020);
house1.age();


class Apartment extends House{
    constructor(name, year, floor) {
        //부모(하우스)의 생성자 호출: 슈퍼 키워드 넣어줘야하쥬?
        super(name, year);  
        this.floor = floor;
    }

    //오버라이딩: 부모에 있는 메소드를 자식이 다시 정의하는 것
    age() {
        super.age();
        //console.log(`이 아파트는 ${new Date().getFullYear()-this.year}년 전에 건축됨`);
        console.log(`아파트 층수: ${this.floor}`);
    };

}

const apt1 = new Apartment("롯데아파트", 1994, 25);
console.log(apt1.floor);
apt1.age();

function test(a,b,c){
    console.log(`a: ${a}, b: ${b}, c: ${c}`)
}

function test(a,c){
    console.log(`a: ${a}, c: ${c}`)
}

test(2,1,5);
//오버로딩: 자바스크립트에 따로 없는 개념 
//오버로딩: 똑같은 함수의 이름으로 여러개의 함수를 선언하는 것 
//=> 매개변수가 다르다 

class Shape {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }

    getArea() {
        console.log(this.width*this.length);
    };
}

const square = new Shape(5,5);
square.getArea();

class Rectangle extends Shape {
    constructor(width, length){
        super(width, length);
    }

    diagonal(){
        console.log(Math.sqrt((this.width)*(this.width) + (this.length)*(this.length)));
    }
}

const rectangle = new Rectangle(3,4);
rectangle.diagonal();

class Triangle extends Shape {
    constructor(width, length){
        super(width, length);
    }

    getArea() {
        console.log(this.width*this.length / 2);
    }
}

class Circle extends Shape {
    constructor(width, length, radius){
        super(width, length);
        this.radius = radius;
    }
    
    getArea() {
        console.log(this.radius * this.radius * 3.14);
    }
}

const triangle = new Triangle(6,6);
triangle.getArea();

const circle = new Circle(5,5,5);
circle.getArea();

let rec1 = new Shape(3,4);
rec1.getArea();