let nums = [0, 1, 2, 2, 3, 0, 4, 2];


var removeElement = function (a, val) {
    let x = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != val) {
            a[x] = a[i];
            x++
        }
    }

    return x;
};


console.log(removeElement(nums, 2));