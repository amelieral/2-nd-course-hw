
function game4() {
    let score = 0;

    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: "2" // номер правильного ответа в виде строки
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: "2"
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: "2"
        }
    ];

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        const userAnswer = prompt(currentQuestion.question + "\n" + currentQuestion.options.join("\n"));

        if (userAnswer === null) {
            alert("Игра завершена. Спасибо за игру!");
            return;
        }

        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
            alert("Правильно!");
        } else {
            alert("Неправильно! Правильный ответ: " + currentQuestion.options[currentQuestion.correctAnswer - 1]);
        }
    }

    alert("Игра завершена! Ваш счет: " + score + "/" + quiz.length);
}