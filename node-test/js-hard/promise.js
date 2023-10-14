//promise 기본 예시
function promise1(flag) {
    return new Promise(function(resolve, reject){
        if(flag){
            resolve('promise 상태는 fulfilled! then으로 연결됩니다. \n 이때의 flag가 true입니다.');
        } else {
            resolve('promise 상태는 rejected! catch로 연결됩니다. \n 이때의 flag가 false입니다.');
        }
    });
}

/*특정 함수가 return 하는 값이 promise 객체일 경우, chaining으로 then, catch라는 메소드 사용
promise1(true).then(function(result){
    console.log(result);
})
.catch(function(err) {
    console.log(err);
})

promise1(false).then(function(result){
    console.log(result);
})
.catch(function(err) {
    console.log(err);
})

promise1(true).then((result) => {
    //result에는 resolve로 보낸 인자 값이 들어오게 된다
    //여기서는 'fulfilled'
    console.log(result);
})
.catch((err)=>{console.log(err)});



//콜백지옥의 예시, 프로미스로 하면 간단해진다
function add(n1, n2, callback) {
    setTimeout(function () {
        let result = n1 + n2;
        callback(result);
    }, 1000);
}

function mul(n, callback) {
    setTimeout(function () {
        let result = n * 2;
        callback(result);
    }, 700);
}

function sub(n, callback) {
    setTimeout(function () {
        let result = n - 1;
        callback(result);
    }, 500);
}

add(4, 3, function(x) {
    console.log(`1:`, x);

    mul(x, function(y) {
        console.log(`2:`, y);
    
        sub(y, function (z) {
            console.log(`3:`, z);
        });
    });
});



//프로미스로 변경! 
function add(n1, n2) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            let result = n1 + n2;
            resolve(result);
        }, 1000);
    })
}

function mul(n) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            let result = n * 2;
            resolve(result);
        }, 700);
    })
    
}

function sub(n) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            let result = n - 1;
            resolve(result);
        }, 500);
    })
}

add(4,3)
.then(function(result) {
    console.log(`1: ${result}`);
    return mul(result);
})
.then(function(result) {
    console.log(`2: ${result}`);
    return sub(result);
})
.then(function(result) {
    console.log(`3: ${result}`);
})
*/

//async / await와 함께 사용 (promise 기반임!)
async function add(n1, n2) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            let result = n1 + n2;
            resolve(result);
        }, 1000);
    })
}

async function mul(n) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            let result = n * 2;
            resolve(result);
        }, 700);
    })
    
}

async function sub(n) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            let result = n - 1;
            resolve(result);
        }, 500);
    })
}

//1. async 함수는 promise를 return. 
//2. await 키워드는 async 함수 내부에서만 사용 가능. 
async function exec() {
    const x = await add(3,4);
    console.log("1:", x);
    const y = await mul(x);
    console.log("2:",y);
    const z = await sub(y);
    console.log("3:",z);
}

//exec();

/*
add(4,3)
.then(function(result) {
    console.log(`1: ${result}`);
    return mul(result);
})
.then(function(result) {
    console.log(`2: ${result}`);
    return sub(result);
})
.then(function(result) {
    console.log(`3: ${result}`);
})
*/


async function goMart() {
    console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

let product;
let price;

async function pickDrink() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log("고민 끝!!");
            product = "제로콜라";
            price = 2000;
            resolve(true);
        }, 3000);
    });
}

async function pay(product, price){
    console.log(`상품명:${product}, 가격:${price}`);
}

async function print() {
    goMart();
    await pickDrink();
    pay(product, price);
}

print();