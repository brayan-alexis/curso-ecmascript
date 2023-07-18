// var lastName = 'David';
// lastName = 'Smith';
console.log(lastName); // Smith

let fruit = 'apple';
fruit = 'banana';
console.log(fruit); // banana

const PI = 3.1415926;
PI = 3.14;
console.log(PI); // TypeError: Assignment to constant variable. 

// Block scope
const fruits = () => {
    if (true) {
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'banana'; // block scope
        const fruit3 = 'kiwi'; // block scope
        console.log(fruit1); // apple
        console.log(fruit2); // banana
        console.log(fruit3); // kiwi
    }
    console.log(fruit1); // apple
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3); // ReferenceError: fruit3 is not defined
}

fruits();
