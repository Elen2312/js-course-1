"use strict";

function start() {
    let num = document.getElementById('input').value;
    let arrUser = num.split('').slice(0, 3).map(parseFloat);
    let object = {};

    if (arrUser.length === 1) {
        object['единицы'] = arrUser[0];
    } else if (arrUser.length === 2) {
        object['десятки'] = arrUser[0];
        object[' единицы'] = arrUser[1];
    } else {
        object['сотни'] = arrUser[0];
        object[' десятки'] = arrUser[1];
        object[' единицы'] = arrUser[2];
    }

    let re =/[{"}]/g;
    let str = JSON.stringify(object);
    document.getElementById('message').textContent = str.replace(re, '');
}
