let years = [2005, 2010, 1990, 1985, 1975];
let currentYear = 2025;
let ageGroups = [
    [0, 18],
    [18, 30],
    [30, 50],
    [50, null] // null means no upper bound
];

// output { "0-18": 1, "18-30": 1, "30-50": 2, "50+": 1 }


let ages = years.map((age) => 2025 - age);

let result = {};

for (let age of ages) {
    for (let [min, max] of ageGroups) {
        let key = max ? `${min}-${max}` : `{min}+`;

        if ((max && age >= min && age < max) || (!max && age >= min)) {
            result[key] = (result[key] || 0) + 1
        }
    }
}

console.log(result)
