// Write a function that returns the smallest number in an array.


let array = [10, 5, -6, 79, -4]


function finLowest(arr) {
    let lowest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i]
        }
    }


    return lowest;
}

console.log(finLowest(array));