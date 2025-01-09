function game3() {
    while (true) {
        const userInput = prompt('Напиши текст и посмотри, что произойдёт!');

        if (userInput === null) {
            alert("Игра завершена. Спасибо за игру!");
            break;
        }

        const userAnswer = userInput.split('').reverse().join('');
        alert("Перевернутый текст: " + userAnswer);
    }
}