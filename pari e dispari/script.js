
//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


//l'utente sceglie pari o dispari
const pari_o_dispari = prompt('Scegliere tra pari o dispari');
console.log(pari_o_dispari);


//l'utente sceglie un numero da 1 a 5
const num = parseInt(prompt('Scegli un numero da 1 a 5'));

console.log('Il numero dell\'utente è:', num);


// Condizione nel caso l'utente inserisce caratteri diversi dai numeri
// o i numeri scritti non sono quelli richiesti
if(isNaN(num) || num < 1 || num > 5){

    alert('Ritenta sarai più fortunato')

}


//generiamo numero random da 1 a 5 per il pc usando una funzione
function num_random_pc(min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

  }
  
  const num_pc = num_random_pc(1, 5);
  
  console.log('Il numero del pc è:', num_pc);


  //sommiamo il nemero dato dall'utente e quello del pc
  const somma = num + num_pc

  console.log('La somma è', somma);

  