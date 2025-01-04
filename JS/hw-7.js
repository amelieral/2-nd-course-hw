/*Задание 1*/

let word = `js`;
word = word.toUpperCase();

console.log(word);

/*Задание 2*/

function filter (arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr))
}

console.log(filter([`Grandmother`, `Grandfather`, `Mother`], `grand`));

/*Задание 3*/

let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.floor(num));
console.log(Math.round(num));

/*Задание 4*/

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

/*Задание 5*/

function getNumRandom() {
    return Math.floor((Math.random()) * 10) + 1
}

console.log(getNumRandom());

/*Задание 6*/

function getRandomNum (num) {
    return Array.from({length: (num / 2)}, () => Math.floor(Math.random() * num))
}

console.log (getRandomNum(6));

/*Задание 7*/

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(4,10));

/*Задание 8*/

 let myDate = new Date();
console.log(myDate);

/*Задание 9*/

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

/*Задание 10*/

function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];
    const month = date.getMonth();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}.
    Время : ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));