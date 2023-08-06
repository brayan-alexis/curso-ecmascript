// Now you can change from an array to an object with Object.fromEntries
const entries = new Map([[ 'name', 'Brayan' ], [ 'age', 23 ]]);

// Original array
console.log(entries); // Map { 'name' => 'Brayan', 'age' => 23 }
// Object from entries
console.log(Object.fromEntries(entries)); // { name: 'Brayan', age: 23 }