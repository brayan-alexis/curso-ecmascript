const button = document.getElementById('btn');

button.addEventListener('click', async () => {
  const module = await import('./module.js');
  console.log(module); // { hello: [Function: hello] }
  module.hello(); // Hello World!
});