let str = 'a5s4adjd785sd8';

let num = '';  // temporary string to collect digits
let sum = 0;   // final sum

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= '0' && ch <= '9') {
        // If the character is a digit, add it to the current number
        num += ch;
    } else {
        // If we encounter a non-digit and num is not empty, convert and add
        if (num !== '') {
            sum += Number(num);
            num = ''; // reset for next number
        }
    }
}

// After loop, check if there’s a number left to add
if (num !== '') {
    sum += Number(num);
}

console.log(sum); // 803
