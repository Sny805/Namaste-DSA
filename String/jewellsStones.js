// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3


var numJewelsInStones = function(jewels, stones) {
     let count=0;
     for(let i=0;i<stones.length;i++){
        if(jewels.includes(stones[i])){
          count++
        }
    }
    
    return count
};

console.log(numJewelsInStones(jewels,stones))


var numJewelsInStones = function(jewels, stones) {
     let count=0;
      Jset=new Set();
     for(let i=0;i<jewels.length;i++){
         Jset.add(jewels[i])
    }

     for(let j=0;j<stones.length;j++){
         if(Jset.has(stones[j])){
            count++
         }
     }}

// Time O(m*n)
// Space O(1)

