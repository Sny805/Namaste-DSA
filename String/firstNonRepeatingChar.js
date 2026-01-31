function firstNonRepeatingChar(str) {
  const freq = {};

  // Step 1: Count frequency
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Step 2: Find first non-repeating
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}


// console.log(firstNonRepeatingChar("aabbccd")); // d
// console.log(firstNonRepeatingChar("aabb"));    // null
// console.log(firstNonRepeatingChar("swiss"));   // w

const res = (str) => {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

console.log(res("swiss"));// w
