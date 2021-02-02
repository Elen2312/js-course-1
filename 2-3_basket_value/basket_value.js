"use strict";

let price;

function start() {
    price = 0;
    const cart = [['чизбургер', 100], ['биг мак', 200]];
    for (let i = 0; i < cart.length; i++) {
        price = price + cart[i][1];
    }

    document.getElementById('count').textContent = cart.length;
    product(cart.length);

    document.getElementById('price').textContent = 'на сумму ' + price + ' ' + declOfNum(price, ['рубль', 'рубля', 'рублей']);
}

function product(cart) {
    document.getElementById('product').textContent = declOfNum(cart);
}

function declOfNum (num, words = ['товар', 'товара', 'товаров']) {
    return num % 100 > 4 &&  num % 100 < 20 ? words[2] : num % 10 === 1 ? words[0] : num  % 10 === 0 ? words[2] : num % 10 < 5 ? words[1] : words[2];
}

