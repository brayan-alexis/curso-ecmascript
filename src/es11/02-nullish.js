const number = 1;
const n = number ?? 123;

console.log(n); // 1

const anotherNumber = null;
const num = anotherNumber ?? 123;

console.log(num); // 123