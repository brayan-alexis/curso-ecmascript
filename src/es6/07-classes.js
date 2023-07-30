// Declare a class
//class User {}; 

// Create an instance of the class
//const user = new User();

// Class with method
class User {
    // method
    greetings() {
        return 'Hello World!';
    }
}

const user = new User(); // Create an instance of the class
console.log(user.greetings()); // Call the method
const user2 = new User(); // Create another instance of the class
console.log(user2.greetings()); // Call the method

// Class with constructor
class User {
    // constructor
    constructor() {
        console.log('A new user has been created');
    }

    greetings() {
        return `Hello ${this.name}!`;
    }
}

const user3 = new User('John');

// Class with constructor and properties
// this
class User {
    // constructor
    constructor(name) {
        this.name = name;
    }

    // methods
    speak() {
        return `Hello`;
    }
    greetings() {
        return `${this.speak()} ${this.name}!`;
    }
}
const user4 = new User('John');
console.log(user4.greetings()); // Hello John!

// Setters and getters
class User {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        return `Hello`;
    }
    greetings() {
        return `${this.speak()} ${this.name}!`;
    }

    // setter
    set setAge(age) {
        this.age = age;
    }

    // getter
    get getAge() {
        return this.age;
    }
}

const user5 = new User('John', 30);
console.log(user5.getAge); // 30
console.log(user5.setAge = 31); // 31