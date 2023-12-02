
//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


//l'utente sceglie pari o dispari
const pari_dispari = prompt('Scegliere tra Pari o Dispari');
console.log(pari_dispari);


//l'utente sceglie un numero da 1 a 5
const num = Number(prompt('Scegli un numero da 1 a 5'));
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


  //sommiamo il numero dato dall'utente e quello del pc
  const somma = num + num_pc
  console.log('la somma è:' ,somma);


 // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 function is_even(somma){

    if (somma % 2 === 0) {

      return 'pari';

    } else {

      return 'dispari';

    }
  }
  
  // Stabiliamo se la somma è pari o dispari utilizzando la funzione
  const risultato_pari_dispari = is_even(somma);
  console.log('La somma è', risultato_pari_dispari);


  // Dichiariamo chi ha vinto
  if(pari_dispari == risultato_pari_dispari){

    console.log('Complimenti hai vinto');

  } else {

    console.log('Mi dispiace hai perso');

  }