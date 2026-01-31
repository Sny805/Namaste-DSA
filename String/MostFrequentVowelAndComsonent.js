let s = "aeiaeia";

  function VowelandCons(s){
      let map={};
      let vowels=["a","e","i","o","u"];
      let maxVowel=0;
      let maxConsonent=0;
       
       
      for(let value of s){
          map[value]= (map[value] || 0)+1;
      }
      
        for(let value of s){
           if(vowels.includes(value)){
             if(map[value]>maxVowel){
               maxVowel=map[value]
             }
           }
           else{
                if(map[value]>maxConsonent){
                  maxConsonent=map[value]
                }
           }
        }
      
       
      
      
      
      return maxVowel + maxConsonent;
  }
   console.log(VowelandCons(s));

   /////////////////////////



   var maxFreqSum = function(s) {
    let map={};
      let vowels=["a","e","i","o","u"];
      let maxVowel=0;
      let maxConsonent=0;
       
       
      for(let value of s){
          map[value]= (map[value] || 0)+1;
      }
       let mapKeys=Object.keys(map);
        for(let value of mapKeys){
           if(vowels.includes(value)){
            maxVowel=Math.max(maxVowel,map[value])
           }
           else{
                maxConsonent=Math.max(maxConsonent,map[value])
           }
        }
      
       
      
      
      
      return maxVowel + maxConsonent}