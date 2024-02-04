/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Solo se è dispari inseriscilo nell’array.
Stampa a schermo il contenuto dell'array */

alert("Benvenuto nel terzo snack");

// Creo l'array vuoto
let oddsNumbers = [];

// Creo un ciclo for in cui faccio inserire
// 6 numeri all'utente
for ( let i = 0; i < 6; i++){
    
    let input = parseInt(prompt("Inserisci un numero"));

    // creo un if per far inserire solo i numeri dispari
    if ( input % 2 != 0){
        oddsNumbers.push(input);
    }
}
console.log(oddsNumbers);
