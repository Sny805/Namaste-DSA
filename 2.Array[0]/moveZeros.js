let nums = [0, 1, 0, 3, 12]

var moveZeroes = function (nums) {
    let p = 0;
    let temp;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            temp = nums[p];
            nums[p] = nums[i];
            nums[i] = temp
            p++
        }
    }
    return nums
};


console.log(moveZeroes(nums));