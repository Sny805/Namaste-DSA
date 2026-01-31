const arr = [
    { "name": "A", "class": 5 },
    { "name": "B", "class": 6 },
    { "name": "C", "class": 6 },
    { "name": "D", "class": 5 }
];

/*
[
  { class: 5, names: ["A", "D"] },
  { class: 6, names: ["B", "C"] }
]
*/

const result = Object.values(arr.reduce((acc, curr) => {
    if (!acc[curr.class]) {
        acc[curr.class] = { class: curr.class, names: [] }
    }
    acc[curr.class].names.push(curr.name)

    return acc;

}, {}))

console.log(result);