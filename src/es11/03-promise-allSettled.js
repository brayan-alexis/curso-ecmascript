const promise1 = new Promise((resolve, reject) => reject("Rejected!"));
const promise2 = new Promise((resolve, reject) => resolve("Resolved 1!"));
const promise3 = new Promise((resolve, reject) => resolve("Resolved 2!"));

Promise.allSettled([promise1, promise2, promise3]).then((result) => console.log(result)); 
// [ 
//  { status: 'rejected', reason: 'Rejected!' }, 
//  { status: 'fulfilled', value: 'Resolved 1!' }, 
//  { status: 'fulfilled', value: 'Resolved 2!' } 
// ]