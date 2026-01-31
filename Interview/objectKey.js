 const obj={};
 const key1={};
 const key2={};
 
 obj[key1]="value1";
 obj[key2]="value2";
 
 console.log(obj[key1]);

 // O/p value2

//  When you use an object as a key in a plain object ({}), JavaScript automatically converts it to a string.
//  Both object keys get converted to the same string "[object Object]", so the second assignment overwrites the first.


const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// O/P 456

function makeCounter(){
  let count=0;
  
  return function(){
    return count++
  }
}


const counter1=makeCounter();
const counter2=makeCounter();

 console.log(counter1());
 console.log(counter1());
 console.log(counter2());

 // 0 1 0

//  “Each call to makeCounter() creates a new closure with its own private state. The counters do not share the count variable.”