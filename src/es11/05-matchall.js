const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Banana, Apple, Banana, Orange, Apple, Apple, Banana';

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}