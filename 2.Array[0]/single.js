
let nums = [4, 1, 2, 1, 2]

var singleNumber = function (nums) {
    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }

    return xor
};





console.log(singleNumber(nums));