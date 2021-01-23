"use strict";

let numPC, out;
numPC = Math.floor((Math.random() * 10) + 1);
console.log(numPC);


function start() {
    let numUser, mes;
    numUser = document.getElementById('input').value;
    mes = document.getElementById('message');

    if (numUser === numPC) {
        mes.innerHTML = 'Вы угадали!';
    } else if (numUser > numPC) {
        mes.innerHTML = 'Вы ввели число больше';
    } else {
        mes.innerHTML = 'Вы ввели число меньше';
    }
}


