// Write a function that searches for an  element in array and returns the index and if element is not present then return -1

let array = [10, 5, 6, 79, 4]

function findIndex(arr, num) {
    let n = arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {

            return i
        }
    }

    return -1;

}

console.log(findIndex(array, 4));




