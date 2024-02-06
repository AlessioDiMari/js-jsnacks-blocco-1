/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

// Salvo il button calcola

const userNumber = prompt("Inserisci un numero a quattro cifre");

if ( userNumber.length != 4 || isNaN(userNumber)){
    // condizione se l'utente non ha inserito un numero di 4 cifre
    // o non ha inserito un numero
    alert("Ricarica la pagina e inserisci un NUMERO di QUATTRO cifre!")
} else {

    // Dichiaro la variabile della somma 
    let numbersSum = 0;

    // Creo un ciclo for per aggiungere ogni numero della cifra
    // alla somma
    for ( let i = 0; i < userNumber.length ; i++ ){

        numbersSum += Number(userNumber[i]);

    }

    document.getElementById("risultato").innerHTML = `La somma delle cifre del numero inserito é ${numbersSum}!`;

}