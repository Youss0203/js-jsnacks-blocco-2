/*dare la possibilità di inserire due parole. Verificare tramite una funzione 
che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, 
stamparle entrambe altrimenti stampare la più lunga delle due.*/



const primaParola= prompt("inscerisci una parola");
const secondaParola = prompt("inserisci un altra parola");

function paroleScritte(){

    
    if(primaParola = secondaParola){
        return primaParola,secondaParola;
    }else if(primaParola > secondaParola){
        return primaParola
    }else{
        return secondaParola
    }
}