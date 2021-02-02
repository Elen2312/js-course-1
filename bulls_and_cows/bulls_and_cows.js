"use strict";

let numPC = Pc();
let move = 10;

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
    let arrUser = num.split('').slice(0, 4).map(parseFloat);

    check(arrUser);
}

function check(numUser) {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
        if (numUser[i] === numPC[i]) {
            bulls++;
        } else if (numPC.indexOf(numUser[i]) >= 0) {
            cows++;
        }
    }
    console.log(numPC + '; ' + numUser + '; b: ' + bulls + '; c: ' + cows);

    move--;
    document.getElementById('move').textContent = move;
    num_word()

    result(numUser, bulls, cows);
    let status;
    if ((move === 0) || (bulls === 4)) {
        status = ' проиграли';
        if (bulls === 4) {
            status = ' выиграли';
        }
        gameOver(status);
    }
}

function num_word() {
    document.getElementById('word').textContent = (move === 1) ? 'ход' : (move % 10 > 1 && move % 10 < 5) ? 'хода' : 'ходов';
}

function result(numUser, bulls, cows) {
    let mes = document.getElementById('message');
    let newLine = document.createElement('p');
    newLine.textContent = numUser + ' быки: ' + bulls + '; коровы: ' + cows;
    mes.append(newLine);
}

function gameOver(status) {
    alert('Вы ' + status + '\nЗагаданное число: ' + numPC);
    numPC = Pc();
    move = 10;
    document.getElementById('move').textContent = move;
    num_word();
    clearHistory();
}

function clearHistory() {
    const block = document.querySelector('#message');
    while (block.firstChild) block.firstChild.remove();
}
