// Write a function that returns the largest number in an array.



let array = [10, 5, -6, 79, -4]


function finLargest(arr) {
    let largest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }


    return largest;
}

console.log(finLargest(array));