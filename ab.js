"use strict";

function start() {
    let a, b, res;
    a = Number(document.getElementById('varA').value);
    b = Number(document.getElementById('varB').value);
    console.log(a, b);
    res = document.getElementById('out');
    console.log(res);

    if (a >= 0 && b >= 0) {
        res.innerHTML = a - b;
    } else if (a < 0 && b < 0) {
        res.innerHTML = a * b;
    } else {
        res.innerHTML = a + b;
    }
}