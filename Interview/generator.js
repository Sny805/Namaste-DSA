function* generateNumbers() {
    let i = 1;
    while (true) {
        yield i++; // pause after each yield
    }
}

const numbers = generateNumbers();

console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2
console.log(numbers.next().value); // 3
