console.log("<<<<<<<<<<<<<<<<<<<< task 4 >>>>>>>>>>>>>>>>>>>>")
stringThree = lastLetters(stringOne) + lastLetters(stringTwo);
console.log(stringThree);
console.log("****************************************")

function lastLetters (string) {
    let newString = ""; 
    for (let i = 3; i > 0; i --) {
        newString += string[string.length - i]; 
    }
    return newString;
}