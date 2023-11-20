/*dare la possibilità di inserire due parole. Verificare tramite una funzione 
che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, 
stamparle entrambe altrimenti stampare la più lunga delle due.*/



const primaParola = prompt("inscerisci una parola");
const secondaParola = prompt("inserisci un altra parola");

function paroleScritteUguali(wordOne, wordTwo) {
    if (wordOne.length === wordTwo.length) {
        return true;
    }
    return false;
}

if (paroleScritteUguali(primaParola, secondaParola)) {
    console.log(primaParola, secondaParola)
}
else if (primaParola.length > secondaParola) {
    console.log(primaParola)
} else {
    console.log(secondaParola)
}

