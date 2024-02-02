/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
alert("Benvenuto nello snack 2!!!")


// Dichiaro un array vuoto

const numbers = [];

// Con l'utilizzo di un ciclo for chiedo all'utente
// di inserire 10 numeri che verranno convertiti in 
// valori numerici e poi inseriti nell'array 

for ( let i = 0; i < 10; i++){
    let input = prompt("Inserisci il numero " + (i + 1) + "°");

    // converto l'input dell'utente in valori numerici
    // e poi li inserisco nell'array
    let singleNumber = parseFloat(input);
    numbers.push(singleNumber);
}

// Sommo i vari elementi dell'array tramite un ciclo for

// Dichiaro la variabile "sum" come somma degli elementi
let sum = 0;

for( let j = 0; j < numbers.length; j++){
    sum = sum + numbers[j];
}


// Visualizzo in pagina la somma degli elementi
document.getElementById("somma").innerHTML = "La somma é : " + sum;