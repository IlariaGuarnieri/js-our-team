// prendo l'id dell'html e lo passo su js
const output = document.getElementById('output')
const listaUser = document.getElementById('listaUser')

const user = {
  firstName : 'Wayne Barnett',
  mansione : 'Founder & CEO',
  info :['Wayne Barnett', 'Founder & CEO' ]
}
console.log(user);

for(let chiave in user){
  console.log(user[chiave]);
  // stampo
  listaUser.innerHTML +=`<li> ${chiave} : ${user[chiave]} </li>`
}

// stampo
// output.innerHTML = user.firstName;
// output.innerHTML = user.mansione;

