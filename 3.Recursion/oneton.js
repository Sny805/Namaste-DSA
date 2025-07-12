
let n = 5;

function sumofn(x) {
    if (x == 0) {
        return 0
    }
    return x + sumofn(x - 1);
}


console.log(sumofn(n));  