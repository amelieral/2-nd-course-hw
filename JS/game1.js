function game1() {
    const a = Math.floor(Math.random() * 100) + 1;

    while (true) {
        let userInput = prompt('Отгадай число от 1 до 100');


        if (userInput === null) {
            alert('Игра завершена.');
            break;
        }

        let trueNum = Number(userInput);

        if (isNaN(trueNum)) {
            alert('Вы ввели строку! Пожалуйста, введите число.');
        } else if (trueNum === a) {
            alert(`Угадал! Загаданное число: ${a}`);
            break;
        } else if (trueNum > a) {
            alert('Загаданное число меньше. Попробуй снова!');
        } else if (trueNum < a) {
            alert('Загаданное число больше. Попробуй снова!');
        }
    }
}