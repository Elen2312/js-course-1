"use strict";

let numPC = Pc();

function Pc() {
    let arrPC = [];

    while (arrPC.length < 4) {
        let num = Math.floor(Math.random() * 10);

        if (arrPC.indexOf(num) < 0) {
            arrPC.push(num);
        }
    }
    return arrPC;
}

function start() {
    let num = document.getElementById('input').value;
    let arrUser = [];

    for (let i = 0; i < 4; i++) {
        let numPlayer = Number(num.substr(i, 1));
        arrUser.push(numPlayer);
    }
    check(arrUser);
}

function check(numUser) {
    let bulls = 0;
    let cows = 0;
    let move = Number(document.getElementById('move').textContent);

    for (let i = 0; i < 4; i++) {
        if (numUser[i] === numPC[i]) {
            bulls++;
        } else if (numPC.indexOf(numUser[i]) >= 0) {
            cows++;
        }
    }
    console.log(numPC + ' b: ' + bulls + ' c: ' + cows);

    move--;
    document.getElementById('move').textContent = move;

    // НЕ РАБОТАЕТ ФУНКЦИЯ СКЛОНЕНИЯ СЛОВА

    function num_word() {
       let move = Number(document.getElementById('move').value);
       document.getElementById('word').textContent = (move === 1) ? 'ход' : (move % 10 > 1 && move % 10 < 5) ? 'хода' : 'ходов';
    }

    if ((move === 0) || (bulls === 4)) {
        let status = ' проиграли';
        if (bulls === 4) {
            let status = ' выиграли';
        }
       gameOver(numPC, status);
    }
    result(numUser, bulls, cows);
}

function result(numUser, bulls, cows) {
    let mes = document.getElementById('message');
    let newLine = document.createElement('p');
    newLine.textContent = numUser + ' быки: ' + bulls + '; коровы: ' + cows;
    mes.appendChild(newLine);
}

function gameOver(numPC, status) {
    alert('Вы ' + status + '\nЗагаданное число: ' + numPC);
    location.reload();
}
