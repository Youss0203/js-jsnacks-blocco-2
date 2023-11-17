/*Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
Continua a chiedere i numeri all'utente e a inserirli nell'array 
fino a quando la somma degli elementi è minore di 50*/


/*iniziamo con il creare un array vuoto e chiedi all'utente 
un numero che viene inserito nell'array*/
const newArray =[];


let somma=0

while(somma < 50){
    const userNUmber=parseInt(prompt("inserisci un numero"));
    if(!isNaN (userNUmber)){
        somma = somma+userNUmber
        newArray.push(userNUmber)
    }
    
}




console.log(somma)




