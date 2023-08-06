// flat
const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(arr.flat(3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// flatMap
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.flatMap(value => [value, value * 2])); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]