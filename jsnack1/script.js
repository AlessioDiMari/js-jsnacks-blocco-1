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

// Verifico quale parola é più lunga
if(firstLength > secondLength){
    // La prima parola è più lunga
    document.getElementById("risultato").innerHTML = "La prima parola è la più lunga"
    document.getElementById("prima-parola").innerHTML = firstWord;
    document.getElementById("seconda-parola").innerHTML = secondWord;

} else if(firstLength < secondLength){
    // La seconda parola è la più lunga
    document.getElementById("risultato").innerHTML = "La seconda parola è la più lunga"
    document.getElementById("seconda-parola").innerHTML = secondWord;
    document.getElementById("prima-parola").innerHTML = firstWord;

} else {
    // Le parole hanno lunghezza uguale
    document.getElementById("risultato").innerHTML = "Le parole hanno la stessa lunghezza"
    document.getElementById("prima-parola").innerHTML = firstWord;
    document.getElementById("seconda-parola").innerHTML = secondWord;
}