const user = { username: 'Dxmer', age: 23, country: 'MX' }; // Object
const { username, ...rest } = user; // Spread
console.log(username); // Dxmer
console.log(rest); // { age: 23, country: 'MX' }
