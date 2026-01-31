let n=4;
 function fabonaci(n){
    let a=0,b=1,tem;
    for(let i=2;i<=n;i++){
    
    tem=a+b;
    a=b;
    b=tem;
    
 }
 
 return b
 }
 
  console.log(fabonaci(n))


  function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); 