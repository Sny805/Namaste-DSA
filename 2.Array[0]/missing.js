var missingNumber = function (nums) {

    let n = nums.length

    let csum = n * (n + 1);

    let sum = nums.reduce((acc, num) => {
        acc + num
    }, 0)

    return csum - sum

};