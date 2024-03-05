// prendo l'id dell'html e lo passo su js
const output = document.getElementById('output')

const user = {
  firstName : 'Wayne Barnett',
  mansione : 'Founder & CEO',
}

console.log(user);

user.age = 40;
console.log(user);

// stampo
output.innerHTML = user.firstName;
output.innerHTML = user.mansione;