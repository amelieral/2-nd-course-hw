let correctAnswer;

function generatePuzzle () {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    if (operation === '+') {
        correctAnswer = num1 + num2;
        return `Сколько будет ${num1} + ${num2}?`;
    } else if (operation === '-') {
        correctAnswer = num1 - num2;
        return `Сколько будет ${num1} - ${num2}?`;
    } else if (operation === '*') {
        correctAnswer = num1 * num2;
        return `Сколько будет ${num1} * ${num2}?`;
    } else {
        correctAnswer = (num1 / num2).toFixed(2);
        return `Сколько будет ${num1} / ${num2}? Результат округлите до сотых`;
    }
}

function game2() {
    while (true) {
        const question = generatePuzzle();
        const userAnswer = prompt(question);

        if (userAnswer === null) {
            break;
        }

        if (Number(userAnswer) === Number(correctAnswer)) {
            alert('Правильно! Ты такой молодец!');
        } else {
            alert(`Увы, неправильно. Правильный ответ: ${correctAnswer}`);
        }
    }
}