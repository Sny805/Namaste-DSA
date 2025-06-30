function secondLargest(arr) {

    if (arr.length < 2 || arr.length == 0) {
        return null
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        }
        else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i]
        }

    }


    return secondLargest;
}

let arr = [45, 12, 4, 5, 67, 67, 34, 45]

let result = secondLargest(arr);
console.log(result);