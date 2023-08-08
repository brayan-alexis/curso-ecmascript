const string = 'JavaScript is one of the greatest programming languages in the world. JavaScript is awesome.';
const replacedString = string.replace('JavaScript', 'Python');
const replacedAllString = string.replaceAll('JavaScript', 'Python');

console.log(replacedString); // Python is one of the greatest programming languages in the world. JavaScript is awesome.
console.log(replacedAllString); // Python is one of the greatest programming languages in the world. Python is awesome.