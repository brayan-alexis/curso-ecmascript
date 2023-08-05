const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/; // YYYY-MM-DD (ISO 8601)
const match = regex.exec('2018-04-30');
console.table(match); // Table
console.log(match); // [ '2018-04-30', '2018', '04', '30', index: 0, input: '2018-04-30' ]