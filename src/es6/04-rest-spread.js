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

// Spread operator
let user = { name: 'Charly', age: 27 };
let country = 'USA';

let data = { ...user, country }; //... is the spread operator
let data2 = { id:1, ...user, country };
console.log(data); // { name: 'Charly', age: 27, country: 'USA' }
console.log(data2); // { id:1, name: 'Charly', age: 27, country: 'USA' }

// Rest
function sum(num, ...values) {
    console.log(values); // [1, 2, 3, 4]
    console.log(num + values[0]); // 2
    return num + values[0];
}

sum(1, 1, 2, 3, 4);