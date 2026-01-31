let n = 1234;
let count = 0;
function countDigit(n) {
    if (n == 0) return 1;
    n = Math.abs(n);

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;

    }
    return count;

}

console.log(countDigit(n));