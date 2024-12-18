const ALERT_MESSAGE_DEFAULT = 'Отгадай число от 1 до 100';

function game1 (){
    const a = Math.floor(Math.random() *100) +1;
    let userInput = prompt(`Отгадай число от 1 до 100`);
    let trueNum = Number(userInput);

    if (!isNaN(trueNum) && userInput != null) {
        do {
            /** trueNum is null значит пользователь ничего не ввел */
            if (trueNum !== null) {
                console.log(trueNum)

                if (trueNum === a) {
                    alert(`Угадал`);
                } else if (isNaN(trueNum) && trueNum !== null) {
                    alert(`Вы ввели строку!`);
                    trueNum = prompt(ALERT_MESSAGE_DEFAULT);
                } else if (trueNum > a) {
                    alert(`Загаданное число меньше. Попробуй снова!`);
                    trueNum = prompt(ALERT_MESSAGE_DEFAULT);
                } else if (trueNum < a) {
                    alert(`Загаданное число больше. Попробуй снова!`);
                    trueNum = prompt(ALERT_MESSAGE_DEFAULT);
                }
            }
            else {
                break;
            }
        } while (trueNum !== a);
    } else if (userInput != null) {
        alert(`Не честно, вы ввели строку, начните заного!`);
    }
}
