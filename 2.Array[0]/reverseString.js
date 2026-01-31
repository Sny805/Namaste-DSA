let string = ["s", "u", "n", "n", "y"]

var reverseString = function (a) {
    let temp;
    let len = a.length
    let n = Math.floor(len / 2);
    for (let i = 0; i < n; i++) {
        temp = a[i];
        a[i] = a[len - 1 - i];
        a[len - 1 - i] = temp

    }

    return a;
};

console.log(reverseString(string));




function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("javascript"));






