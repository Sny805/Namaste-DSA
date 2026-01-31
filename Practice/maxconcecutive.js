
let a = [1, 2, 0, 1, 1, 1, 0];


function maxconcecutive(a) {
    let count = 0;
    let max = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] == 1) {
            count++
        }

        else {
            max = Math.max(count, max);
            count = 0;
        }
    }

    return Math.max(max, count);
}


console.log(maxconcecutive(a));