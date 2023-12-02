
//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


//Chiedere all’utente di inserire una parola
const parola_palindroma = prompt('Scrivi una parola')

const parola_inversa = inverti_parola(parola_palindroma);


//condizione per sapere se la parola è o no palindroma
if(parola_palindroma === parola_inversa){

    console.log('la parola è palindroma');

  } else {

    console.log('la parola non è palindroma');

  }
  
  
  //funzione per leggere la parola al contrario
function inverti_parola(str){

  const strInversa = str.split('').reverse().join('');  

  return strInversa;
}