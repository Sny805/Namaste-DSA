 let s = "abcdefg", k = 2



var reverseStr = function(s, k) {
     s=s.split("");
     for(let x=0;x<s.length;x=x+(2*k)){
         let n=k;
         let min=Math.floor(n/2);
         let temp;
         for(let i=0;i<min;i++){
            temp=s[x+i];
            s[x+i]=s[x+n-1-i];
             s[x+n-1-i]=temp
         }
     }

     return s.join("");
};