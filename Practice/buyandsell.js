
let a = [4, 5, 1, 7];

function buyandsell(a) {
    let min = a[0];
    let max = 0;

    for (let i = 1; i < a.length; i++) {
        if (a[i] - min > max) {
            max = a[i] - min
        }

        if (a[i] < min) {
            min = a[i]
        }
    }

    return max;


}

console.log(buyandsell(a));
