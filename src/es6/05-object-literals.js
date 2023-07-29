// Enahced object literals

// es5
function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}
console.log(newUser("Charly", 27, "USA")); // { user: 'Charly', age: 27, country: 'USA' }

// es6
function newUser(user, age, country) {
    return { 
        user,
        age,
        country
    } // we can omit the key if it's the same as the variable name
}
console.log(newUser("Charly", 27, "USA")); // { user: 'Charly', age: 27, country: 'USA' }

// Object literals + classic
function newUser(user, age, country, uId) {
    return { 
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("Charly", 27, "USA", 1)); // { user: 'Charly', age: 27, country: 'USA', id: 1 }