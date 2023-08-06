async function* asyncGenerator() {
    yield await Promise.resolve(1); // await is not necessary
    yield await Promise.resolve(2);
    yield  Promise.resolve(3);
}

const asyncIterable = asyncGenerator();
asyncIterable.next().then(response => console.log(response.value)); // 1
asyncIterable.next().then(response => console.log(response.value)); // 2
asyncIterable.next().then(response => console.log(response.value)); // 3
console.log('End');

async function arrayOfNames(arr) {
    for await (let name of arr) {
        console.log(name);
    }
}

const names = arrayOfNames(['Brayan', 'Alexis', 'Mario']); // Brayan, Alexis, Mario
console.log('After');