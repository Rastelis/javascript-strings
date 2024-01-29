console.log("<<<<<<<<<<<<<<<<<<<< task 7 >>>>>>>>>>>>>>>>>>>>")
let stringArray = ["An American in Paris", "Breakfast at Tiffany's", "2001: A Space Odyssey", "It's a Wonderful Life"]

for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = removeVovels(stringArray[i])
}

for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
}
function removeVovels(string) {
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "A": {
                string = string.slice(0, i) + string.slice(i + 1, string.length);
                break;
            }
            case "I": {
                string = string.slice(0, i) + string.slice(i + 1, string.length);
                break;
            }
            case "U": {
                string = string.slice(0, i) + string.slice(i + 1, string.length);
                break;
            }
            case "E": {
                string = string.slice(0, i) + string.slice(i + 1, string.length);
                break;
            }
            case "O": {
                string = string.slice(0, i) + string.slice(i + 1, string.length);
                break;
            }
            case "a": {
                string = string.slice(0, i) + string.slice(i + 1, string.length);
                break;
            }
            case "i": {
                string = string.slice(0, i) + string.slice(i + 1, string.length);
                break;
            }
            case "u": {
                string = string.slice(0, i) + string.slice(i + 1, string.length);
                break;
            }
            case "e": {
                string = string.slice(0, i) + string.slice(i + 1, string.length);
                break;
            }
            case "o": {
                string = string.slice(0, i) + string.slice(i + 1, string.length);
                break;
            }

        }
    }
    return string;
}

console.log("****************************************")
