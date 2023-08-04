const string = 'hello'; // 5 characters

// padStart
console.log(string.padStart(7, 'hi')); // hihello
console.log(string.padStart(6, '@'));  // @hello
console.log(string.padStart(10, '_')); // _____hello

// padEnd
console.log(string.padEnd(6, '_'));       //  hello_
console.log(string.padEnd(10, 'world')); // helloworld
console.log(string.padEnd(10, '_'));    // hello_____
