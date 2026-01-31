
s = "RLRRLLRLRL"


var balancedStringSplit = function(s) {
    let R=0;
    let L=0;
    let count=0;

    for(let i=0;i<s.length;i++){
         if(s[i]=="R"){
            ++R;
         }
         else{
            ++L;
         }

         if(L==R){
             L=R=0;
            count++;
         }
    }

    return count;
};

  console.log(balancedStringSplit(s));