const cat1 = {
    name: "나비",
    age: 2,
    mew: function(){
        console.log("야옹");
    },
};

const cat2 = {
    name: "뽀또",
    age: 1,
    mew: function(){
        console.log("야옹");
    },
};

const cat3 = {
    name: "초코",
    age: 8,
    mew: function(){
        console.log("야옹");
    },
};

// PascalCase 규칙을 이용해서 식별자 생성
// (camelCase에서 첫 글자도 대문자로 하면 됨)
class Cat {
    //생성자 : 메소드의 일종
    //(메소드) 중에서 Cat 클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //메소드
    mew() {
        console.log("야옹");
    }

    //고양이 정보를 콘솔로 찍는 함수
    info() {
        console.log(`이름: ${this.name}, 나이: ${this.age}`);
        this.name 
    }
}

const cat4 = new Cat("치즈", 2);
const cat5 = new Cat("뽀삐", 9);
console.log(cat4.name, cat5.name);
cat4.mew();
cat4.info();





