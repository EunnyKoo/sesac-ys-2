function call(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(name);
            console.log(name);
        },1000);
    })
}

function back() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve('back');
            console.log('back');
        },1000);
    })
}

function hell() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve('callback hell');
            //console.log('callback hell');
        },1000);
    })
}

async function exec(){
    const x = await call("kim");
    console.log(x + "반가워");
    const y = await back();
    console.log(y + "를 실행했구나");
    const z = await hell();
    console.log("여기는 " + z);
}

exec();

/*
call("kim")
.then(function(name) {
    console.log(name + "반가워");
    return back();
})
.then(function(txt) {
    console.log(txt + "를 실행했구나");
    return hell();
})
.then(function(message) {
    console.log("여기는 " + message);
})
*/