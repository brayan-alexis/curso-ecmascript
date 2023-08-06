const entries = new Map([[ 'name', 'Brayan' ], [ 'age', 23 ]]);
console.log(entries); // Map { 'name' => 'Brayan', 'age' => 23 }
console.log(Object.fromEntries(entries)); // { name: 'Brayan', age: 23 }