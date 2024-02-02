/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/


// Do il benvenuto all'utente
alert("Benvenuto nello snack 1");


// Richiedo le parole all'utente
const firstWord = prompt("Insegisci la prima parola");

const secondWord = prompt("Insegisci la seconda parola");


// Do una variabile per verificare la lunghezza
// delle parole che l'utente ha inserito
const firstLength = firstWord.length;
console.log(firstLength);

const secondLength = secondWord.length;
console.log(secondLength);
