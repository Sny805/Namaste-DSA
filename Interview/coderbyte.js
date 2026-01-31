var array = new Array('a', 'b', 'c', 'd', 'e'); // length = 5
array[10] = 'f';                              // length becomes 11
delete array[10];                             // element removed, length unchanged
console.log(array.length);
// o/p 11

function geek() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
geek();
// 5

const user = {
  name: 'Raj',
  location: {
    city: 'NY',
    state: 'NY'
  }
};

const copy = Object.assign({}, user);
copy.location.city = 'Albany';

console.log('original:', user.location);
console.log('copy:', copy.location);

// original: { city: "Albany", state: "NY" } and copy: { city: "Albany", state: "NY" }


const length = 4;
const numbers = [];
for (var i = 0; i < length; i++); // <-- semicolon ends loop
{
  numbers.push(i + 1);
}
// 5

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
// 3 3 3 
// i is declared with let outside loop
// All callbacks run after loop ends
// Final value of i = 3

var number = 10;
var display = function () {
  console.log(number);
  var number = 20;
};
display();
// undefinded

var obj = {
  message: 'Hello',
  innerMessage: function () {
    (function () {
      console.log(this.message);
    })();
  }
};

console.log(obj.innerMessage());
// undefinded

async function getData() {
  return await Promise.resolve('Hello!');
}

const data = getData();
console.log(data);
// Promise {<pending>}

Promise.resolve(123)
// Promise { <fulfilled>: 123 }
