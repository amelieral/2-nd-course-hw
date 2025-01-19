function game5() {
    const choices = ['камень', 'ножницы', 'бумага'];

    function computerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(user, computer) {
        if (user === computer) {
            return 'Ничья!';
        } else if (
            (user === 'камень' && computer === 'ножницы') ||
            (user === 'ножницы' && computer === 'бумага') ||
            (user === 'бумага' && computer === 'камень')
        ) {
            return 'Вы выиграли!';
        } else {
            return 'Компьютер выиграл!';
        }
    }
    
    while (true) {
        let userInput = prompt('Выберите: камень, ножницы или бумага').toLowerCase();

        if (userInput === null) {
            alert('Игра завершена.');
            break; // Выход из игры
        }

        if (!choices.includes(userInput)) {
            alert('Неверный ввод! Пожалуйста, выберите камень, ножницы или бумагу.');
            continue;
        }

        const computer = computerChoice();
        alert(`Компьютер выбрал: ${computer}`);

        const result = determineWinner(userInput, computer);
        alert(result);
    }
}
