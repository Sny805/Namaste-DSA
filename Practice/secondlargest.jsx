

let a = [45, 7, 23, 56, 23];


function secondlargest(a) {
    if (a.length < 2 || a.length == 0) return null
    let secondlargest = -Infinity;
    let largest = -Infinity

    for (let i = 0; i < a.length; i++) {
        if (a[i] > largest) {
            secondlargest = largest;
            largest = a[i]
        }

        else if (a[i] > secondlargest && a[i] != largest) {
            secondlargest = a[i]
        }
    }

    return secondlargest

}

console.log(secondlargest(a));
