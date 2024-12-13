function game1 (){
    const a = Math.floor(Math.random() *100) +1;
    let trueNum = 0

    do {
        let trueNum = Number (prompt(`Отгадай число от 1 до 100`));
        if (trueNum === a) {
            alert(`Угадал`);
        } else if (trueNum > a) {
            alert(`Загаданное число меньше. Попробуй снова!`);
        } else if (trueNum < a) {
            alert(`Загаданное число больше. Попробуй снова!`);
        }
    } while (trueNum !== a);
}
