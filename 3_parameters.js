"use strict";

let a = Number(document.getElementById('varA').value);
let b = Number(document.getElementById('varB').value);
let operation = document.getElementById('operations');

function mathOperations(a, b, operation) {
    switch (operation) {
        case 'Сложение':
            return a + b;
        case 'Вычитание':
            return a - b;
        case 'Умножение':
            return a * b;
    }
}
