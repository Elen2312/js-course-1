"use strict";

// 1 - Камень
// 2 - Ножницы
// 3 - Бумага
// 4 - Ящерица
// 5 - Спок
function script() {
    let numPC = Math.floor((Math.random() * 5) + 1);
    let numUser = +prompt('1 - Камень \n 2 - Ножницы \n 3 - Бумага \n 4 - Ящерица \n 5 - Спок');
    console.log(numUser,numPC);
    if (!Number.isInteger(numUser) || numUser < 1 || numUser > 5) {
        alert("Выберете цифру из предложенного списка.");
        script();
    }
    console.log('Компьютер выбрал ' + numPC + ', а Вы выбрали ' + numUser + '.');
    if ((numUser === 1 && numPC === 2) || (numUser === 1 && numPC === 4) || (numUser === 2 && numPC === 3) || (numUser === 2 && numPC === 4) || (numUser === 3 && numPC === 1) || (numUser === 3 && numPC === 5) || (numUser === 4 && numPC === 5) || (numUser === 4 && numPC === 3) || (numUser === 5 && numPC === 2) || (numUser === 5 && numPC === 1)) {
        alert('Вы победили!');
    } else if (numPC === numUser) {
        alert('Ничья');
        script();
    } else {
        alert('Вы проиграли.');
    }


}