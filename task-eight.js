console.log("<<<<<<<<<<<<<<<<<<<< task 8 >>>>>>>>>>>>>>>>>>>>")
stringOne = `Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`;
stringTwo = "Episode";

let searchIndex = stringOne.search(stringTwo);

let episodeIndex = searchIndex + stringTwo.length + 1;
console.log(stringOne);

console.log(stringOne.slice(episodeIndex, episodeIndex+3));

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log("***************************************");