// prendo l'id dell'html e lo passo su js
// const output = document.getElementById('output')
// const listaUser = document.getElementById('listaUser')
const output2 = document.getElementById('output2')

// const user = {
//   firstName : 'Wayne Barnett',
//   mansione : 'Founder & CEO',
//   info :['Wayne Barnett', 'Founder & CEO' ]
// }

// creo un arrey con oggetti all'interno
const users = [
  {
    firstName : 'Wayne Barnett',
    role : 'Founder & CEO',
    img: "img/walter-gordon-office-manager.jpg",
  },
  {
    firstName : 'Angela Caroll'	,
    role : 'Chief Editor',
    img : "img/angela-caroll-chief-editor.jpg",
  },
  {
    firstName : 'Walter Gordon'	,
    role : 'Office Manager',
    img : "img/walter-gordon-office-manager.jpg",
  },
  {
    firstName : 'Angela Lopez'	,
    role : 'Social Media Manager',
    img : "img/angela-lopez-social-media-manager.jpg",
  },
  {
    firstName : 'Scott Estrada',
    role : 'Developer',
    img : "img/scott-estrada-developer.jpg",
  },
  {
    firstName : 'Barbara Ramos'	,
    role : 'Graphic Designer',
    img : "img/wayne-barnett-founder-ceo.jpg",
  }
]

// console.log(users);

// of a ogni ciclo(giro) prende tutto l'oggetto e lo mette in utente
for(let utente of users){
  // console.log(utente.firstName);
  // stampo
  // listaUser.innerHTML +=`<li> nome: ${utente.firstName} <br> role: ${utente.role} </li>`
  output2.innerHTML += `
  <div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${utente.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${utente.firstName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${utente.role}</h6>
          </div>
        </div>
      </div>
  
  `
  
}








// in a ogni ciclo prende l'indice di goni elemento e lo mette in utente
for(let utente in users){
  // stampo
  // listaUser.innerHTML +=`<li> ${chiave} : ${users[chiave].firstName} </li>`
  console.log(users[utente].firstName)
}

// stampo
// output.innerHTML = user.firstName;
// output.innerHTML = user.mansione;

