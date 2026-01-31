const arr= [1,2,4,4,56,6,7,78,8,9,9,0,76,5,4,3,22,6,1];

  let result={}
 
    function sortObj(arr){
      for (let value of arr){
          result[value]=(result[value] || 0) +1;
      }
      return  result;
    }
    
  const output= sortObj(arr)
  console.log(output);

///////////////////////


const arrObj = [
{key: "id", value: "1"},
{key: "name", value: "Ashish"},
{key: "gender", value: "Male"},
{key: "age", value: "25"}
]

const out = arrObj.reduce((acc, cur) => {
    acc[cur.key] = cur.value;
    return acc;
}, {})
console.log(out);


// out: {
//         id: "1",
//         name: "Ashish",
//         gender: "Male",
//         age: "25"
// }
 


