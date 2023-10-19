const data = {name: "koo",
              gender: "female"};

const jsonData = JSON.stringify(data);

console.log("json: ", jsonData);
console.log("js object: ", JSON.parse(jsonData));