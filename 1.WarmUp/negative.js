// Write a function that returns the number of negative numbers in an array.

let array = [10, 5, -6, 79, -4]

function negative(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++
        }
    }

    return count

}

console.log(negative(array));