// Arrays destructuring
let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
let [a, b] = fruits;
console.log(a, b); // apple banana
console.log(a, fruits[1]); // apple banana

// Object destructuring
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
let {name, age} = person;
console.log(name, person.age); // John 30
console.log(name, age); // John 30