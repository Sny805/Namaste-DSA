
function fibonacci(n){
   let a=0;
   let b=1;
   for(let i=0; i<n; i++){
       console.log(a);
       let temp=a+b;
       a=b;
       b=temp
   }
}
fibonacci(7)

// recursive 

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8
