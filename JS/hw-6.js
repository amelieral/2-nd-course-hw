/*Задание 1*/

const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) break;
    console.log(numbers[i]);
}

/*Задание 2*/

const numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf(4));

/*Задание 3*/

const splitNumbs =  [1, 3, 5, 10, 20]
let joinedNumbs = splitNumbs.join(" ");
console.log(joinedNumbs);

/*Задание 4*/

const arrNumbs = []

for (let i = 0; i < 3; i++) {
    arrNumbs[i] = [];
    for (let j = 0; j < 3; j++) {
        arrNumbs[i][j] = 1;
    }
}
console.log(arrNumbs);

/*Задание 5*/

const arrFive = [1, 1, 1];
arrFive.push(2, 2, 2);
console.log(arrFive);

/*Задание 6*/

const arrSix = [9, 8, 7, 'a', 6, 5];
arrSix.sort();
arrSix.pop();
arrSix.reverse();
console.log(arrSix);

/*Задание 7*/

const arrSeven = [9, 8, 7, 6, 5];

let puzzle = Number(prompt('Угадай число'));

if (arrSeven.includes(puzzle)) {
    console.log('Угадал');
} else {
    console.log('Не угадал');
}

/*Задание 8*/

let word = 'abcdef';

let arrEight = word.split('');

arrEight.reverse();
word = arrEight.join('');

console.log(word);

/*Задание 9*/

const arrNine = [
    [1, 2, 3],
    [4, 5, 6]
];

const newArrNine = [];

for (let i = 0; i < arrNine.length; i++) {
    newArrNine.push(...arrNine[i]);
}
console.log(newArrNine);

/*Задание 10*/

const arrTen = [1, 3, 2, 4, 6, 5, 7, 8, 9, 10];
for (let i = 0; i < arrTen.length; i++) {
    if (arrTen [i + 1]) {
        console.log(arrTen[i] + arrTen [i + 1]);
    }
}

/*Задание 11*/

const nums = [6, 8, 5, 7, 12];
const updateNums = nums.map(num => num ** 2);
console.log(updateNums);

/*Задание 12*/

function  getLength (arrTwelve) {
    return arrTwelve.map(item => item.length)
}

console.log(getLength([random, words]));

/*Задание 13*/

function negativeNumbs (newArrThree) {
    return newArrThree. filter(item => item < 0 );
}

console.log(negativeNumbs([1, 5, -3, 6, -7, 9, -2]));

/*Задание 14*/

function randomNumb () {
    return Math.floor(Math.random() * 10);
}

const arrFour = [];

for (let i = 0; i < 10; i++) {
    arrFour.push(randomNumb());
}

console.log(arrFour);

const evenArr = [];

for (let i = 0; i < arrFour.length; i++) {
    if (arrFour[i] % 2 === 0) {
        evenArr.push(arrFour[i]);
    }
}

console.log(evenArr);

/*Задание 15*/

function averageNumb () {
    return Math.floor(Math.random() * 10);
}

const averageArr = [];

for (let i = 0; i < 10; i++) {
    averageArr.push(averageNumb());
}

console.log(averageArr);

console.log(averageArr.reduce((a, b) => a + b) / averageArr.length);