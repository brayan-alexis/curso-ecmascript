// ES7: Exponentiation Operator (**) in arrays
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // array of numbers
console.log(numbers.includes(5)); // true
console.log(numbers.includes(10)); // false

// ES7: Array includes() method
let names = ['John', 'Jane', 'Jack', 'Jill']; // array of names
console.log(names.includes('Jack')); // true
console.log(names.includes('jack')); // false
console.log(names.includes('Mary')); // false
console.log(names.includes('Jill', 0)); // true (start from index 0)
console.log(names.includes('Jill', 3)); // true (start from index 3)
console.log(names.includes('Jill', 4)); // false (start from index 4)

// Includes in objects: 
//in, hasOwnProperty(), Object.hasOwnProperty(), Object.keys(), Object.values(), Object.entries()
let ob = { a: 1, b: 2, c: 3 };
"b" in ob; // true
"d" in ob; // false
ob.hasOwnProperty("b"); // true
ob.hasOwnProperty("d"); // false
Object.hasOwnProperty(ob, "b"); // true
Object.hasOwnProperty(ob, "d"); // false
Object.keys(ob).includes("b"); // true
Object.keys(ob).includes("d"); // false
Object.values(ob).includes(1); // true
Object.values(ob).includes(4); // false
Object.entries(ob).includes(["b", 2]); // true (compare by reference)
Object.entries(ob).includes(["b", 3]); // false (compare by reference)
// Check if an object has a property
console.log("b" in ob); // true
console.log("d" in ob); // false
console.log(ob.hasOwnProperty("b")); // true
console.log(ob.hasOwnProperty("d")); // false
console.log(Object.hasOwnProperty(ob, "b")); // true
console.log(Object.hasOwnProperty(ob, "d")); // false
console.log(Object.keys(ob).includes("b")); // true
console.log(Object.keys(ob).includes("d")); // false
console.log(Object.values(ob).includes(1)); // true
console.log(Object.values(ob).includes(4)); // false
console.log(Object.entries(ob).includes(["b", 2])); // true (compare by reference)
console.log(Object.entries(ob).includes(["b", 3])); // false (compare by reference)
