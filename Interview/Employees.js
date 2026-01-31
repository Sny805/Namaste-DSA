const employees = [
  { name: "Alice", department: "Engineering", salary: 60000 },
  { name: "Bob", department: "Engineering", salary: 45000 },
  { name: "Charlie", department: "HR", salary: 55000 },
  { name: "David", department: "HR", salary: 70000 },
  { name: "Eve", department: "Finance", salary: 80000 },
];

// 1: Filter employees with salary ≥ 50000  

const filteredEmployees = employees.filter(
  emp => emp.salary >= 50000
);

 console.log(filteredEmployees);
//  O/P [
//   { name: "Alice", department: "Engineering", salary: 60000 },
//   { name: "Charlie", department: "HR", salary: 55000 },
//   { name: "David", department: "HR", salary: 70000 },
//   { name: "Eve", department: "Finance", salary: 80000 }
// ]

// 2: Group employees by department

  const groupedByDepartMent=employees.reduce((acc,emp)=>{
      if(!acc[emp.department]){
        acc[emp.department]=[]
      }
       
      acc[emp.department].push(emp);

      return acc

  },{})

  // O/P {
//   Engineering: [
//     { name: 'Alice', department: 'Engineering', salary: 60000 },
//     { name: 'Bob', department: 'Engineering', salary: 45000 }
//   ],
//   HR: [
//     { name: 'Charlie', department: 'HR', salary: 55000 },
//     { name: 'Devid', department: 'HR', salary: 70000 }
//   ],
//   Finance: [ { name: 'Eve', department: 'Finance', salary: 80000 } ]
// }

// 3. Sum salary per department

const salarySumByDepartment = Object.keys(groupedByDepartment).reduce(
  (acc, dept) => {
    const totalSalary = groupedByDepartment[dept].reduce(
      (sum, emp) => sum + emp.salary,
      0
    );

    acc[dept] = totalSalary;
    return acc;
  },
  {}
);

/////////////////////////////////////
  const a = {
        id: 1,
        name: "rahul",
        age: 20
}
const id = 2
console.log({id, ...a })
console.log({...a, id })

// { id: 1, name: 'rahul', age: 20 }
// { id: 2, name: 'rahul', age: 20 }

// If object keys are duplicated, the later one wins.


