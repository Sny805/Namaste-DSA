let s = "   fly me   to   the moon  "

// T = O(n);
// S=O(1)

// 1st approach
// function lengthOfLastWord(s) {
//     n = s.length - 1;
//     while (n >= 0) {

//         if (s[n] != " ") {
//             break;
//         }
//         n--
//         //  n is the point where my last word start
//     }

//     // count character till you reach a space 
//     let count = 0;
//     while (n >= 0) {
//         if (s[n] === " ") {
//             break
//         }
//         --n;
//         count++

//     }

//     return count

// }

// console.log(lengthOfLastWord(s));
//2nd approach

function lengthOfLastWord2(s) {
    n = s.length - 1
    let count = 0;
    while (n >= 0) {
        if (s[n] != " ") {
            count++
        }
        else if (count > 0) {
            break
        }
        n--
    }
    return count;

}

console.log(lengthOfLastWord2(s));



