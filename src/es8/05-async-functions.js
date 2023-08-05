const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World Async'), 3000)
            : reject(new Error('Test Error'));
    });
}

// Async Await
const anotherFn = async () => { 
    const something = await fnAsync(); // await is only valid in async functions
    console.log(something); // Hello World Async
    console.log('Hello! 😎');
}

console.log('Before');
anotherFn();
console.log('After');
// Before -> After -> Hello World Async -> Hello! 😎