"use strict";

function start() {
    let arrNum = [];
    let n = 1;
    while (n < 100) {
        if (n === 2 || n ===3) arrNum.push(n);
        n++;
        for (let i=2; i <= n; i++) {
            if ((n % 2 === 0 || n % 3 === 0 || n % 5 ===0 || n % 7 ===0) || arrNum.indexOf(n)>=0) {
                break;
            } else {
                arrNum.push(n);
            }
        }
    }
    document.getElementById('out').textContent = arrNum;
}
