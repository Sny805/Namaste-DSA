
// Given a string s consisting of words and spaces, return the length of the last word in the string.

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (a) {
    let x = 0;
    for (let i = 0; i < a.length; i++) {
        // find unique element 
        if (a[i] > a[x]) {
            x++;
            a[x] = a[i]
        }


    }
    return (x + 1)

    //  a.length=x+1;
    // return a


};


console.log(removeDuplicates(nums));
