console.log("<<<<<<<<<<<<<<<<<<<< task 9 >>>>>>>>>>>>>>>>>>>>")

stringOne = "abcdefghijklmnopqrstuvwxyz";

stringTwo = "";

for(let i = 0; i < 3; i++) {
    stringTwo += stringOne[rand(0,stringOne.length-1)];
}

console.log(stringTwo);

console.log("****************************************")

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}