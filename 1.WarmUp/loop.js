let n = 5

// *  *  *  *
//  *  *  *  *
//  *  *  *  *
//  *  *  *  *
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//         row += " * ";
//     }
//     console.log(row)
// }

////////////////////////////////////////////////////////

//  * 
//  *  * 
//  *  *  * 
//  *  *  *  * 
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//         row += " * ";
//     }
//     console.log(row)
// }

// 1
// 12
// 123
// 1234
// 12345

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row += j + 1;
//     }
//     console.log(row)
// }

// 1
// 22
// 333
// 4444
// 55555

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row += i + 1;
//     }
//     console.log(row)
// }

// 12345  
// 1234
// 123
// 12
// 1

// *****
// ****
// ***
// **
// *

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < (n - i); j++) {
//         row += j + 1;
//         // row += "*";
//     }
//     console.log(row)
// }

//     *
//    **
//   ***
//  ****
// *****

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n - (i + 1); j++) {
//         row += " ";
//     }

//     for (k = 0; k < i + 1; k++) {
//         row += "*"
//     }
//     console.log(row)
// }


// 1
// 10
// 101
// 1010
// 10101
let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = ""

    for (let j = 0; j < i + 1; j++) {
        row += toggle;

        if (toggle == 1) {
            toggle = 0
        }
        else {
            toggle = 1;
        }
    }


    console.log(row)
}


