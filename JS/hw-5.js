/*Задание 1*/

let min = (a, b) => { return a <= b ? a : b};

console.log(min(8, 4));
console.log(min(6, 6));

/*Задание 2*/

let anyNumber = (a) => { return a % 2 === 0 ? `Число чётное` : `Число нечетное`}

console.log(anyNumber(102));

/*Задание 3*/

function squareNumber(a) {
    console.log(a ** 2);
}

squareNumber(4);

function squareNumber2(a) {
    return a ** 2;
}

console.log(squareNumber2(4));

/*Задание 4*/

function age () {
    let a = prompt (`Сколько тебе лет?`);
    if (a < 0 || isNaN (a)) {
        alert('Вы ввели неправильное значение');
    } else if (a >= 0 && a <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

console.log(age());

/*Задание 5*/

let checkNumber = (a, b) => {return isNaN(a) || isNaN(b) ? 'Одно или оба значения не являются числом' : a * b }

console.log(checkNumber(2,5))

/*Задание 6*/

function raisingNumber() {
    let numberList = prompt(`Введите число`);

    if (isNaN(numberList)) {
        return `Переданный параметр не является числом`;
    } else {
        return numberList + ' в кубе равняется ' + numberList ** 3;
    }
}

console.log(raisingNumber());

/*Задание 7*/

function getCircleArea() {
    return Math.PI * this.radius ** 2;
};

function getCirclePerimeter() {
    return 2 * Math.PI * this.radius;
};

const circle1 = {
    radius: 10,
    getArea: getCircleArea,
    getPerimeter : getCirclePerimeter
}

const circle2 = {
    radius: 30,
    getArea: getCircleArea,
    getPerimeter : getCirclePerimeter
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());