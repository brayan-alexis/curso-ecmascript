const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
}

anotherFunction()
    .then(response => console.log('then: ' + response)) // Hey!
    .catch(err => console.error('catch: ' + err)) // Whooops!
    .finally(() => console.log('Finished')); // Finished