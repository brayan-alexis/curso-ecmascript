function* iterate(arr) {
    for (let value of arr) {
        yield value;
    }
}

const iterator = iterate(['Brayan', 'Alexis', 'Mauricio', 'Jorge', 'Paola']);
console.log(iterator.next().value); // Brayan
console.log(iterator.next().value); // Alexis
console.log(iterator.next().value); // Mauricio
console.log(iterator.next().value); // Jorge
console.log(iterator.next().value); // Paola
console.log(iterator.next().value); // undefined (end of iteration)