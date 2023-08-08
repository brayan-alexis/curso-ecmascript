// Last item of array
const arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]; // 10 items

// before ES13
console.log(arr[arr.length - 1]); // ten
// after ES13
console.log(arr.at(-1)); // ten