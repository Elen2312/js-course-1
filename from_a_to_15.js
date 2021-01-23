"use strict";

function start() {
    let a, res;
    a = Number(document.getElementById('numUser').value);
    f(a);
}

function f(num) {
    switch (num) {
        case 15:
            console.log(num);
            break;
        default:
            console.log(num);
            num++;
            f(num);
    }
}



