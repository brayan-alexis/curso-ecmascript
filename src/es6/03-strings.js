let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
//console.log(epicPhrase);

// Template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Multiline strings
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n' + 
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

console.log(lorem);
console.log(lorem2);