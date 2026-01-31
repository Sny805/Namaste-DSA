// Input: words = ["leet","code"], x = "e"
// Output: [0,1]


let words = ["leet", "code", "hfr"], x = "e"


function wordscontainingCharacters(a, c) {
    let arr = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] == c) {
                arr.push(i)
                break;
            }
        }
    }

    return arr
}

console.log(wordscontainingCharacters(words, x));

// time complexity = O(n*m)
// Space = O(1)

