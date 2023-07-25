function newUser(name, age, country) {
  var name = name || 'Brayan';
  var age = age || 23;
  var country = country || 'MX';
  console.log(name, age, country);
}
newUser(); // Brayan 23 MX
newUser('Alexis', 25, 'US'); // Alexis 25 US

// ES6
function newAdmin(name = 'Marcus', age = 30, country = 'CO') {
  console.log(name, age, country);
}
newAdmin(); // Marcus 30 CO
newAdmin('Paola', 24, 'CL'); // Paola 24 CL