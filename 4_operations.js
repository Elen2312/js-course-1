"use strict";

function run() {
    let a = Number(document.getElementById('varA').value);
    let b = Number(document.getElementById('varB').value);
    document.querySelector('#res1').innerText = sum(a, b);
    document.querySelector('#res2').innerText = sub(a, b);
    document.querySelector('#res3').innerText = mult(a, b);
    document.querySelector('#res4').innerText = div(a, b);
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}