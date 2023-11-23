/*Chiedo all'utente un numero e genero attraverso una funzione un numero 
di quadrati equivalente al numero inserito 
dall'utente nel DOM, in qualsiasi forma.*/

/* chiedo all'utente un numero */
const userNumber =parseInt(prompt("inserisci un numero"))

const newElement = document.querySelector("div.wrapper")

const squareElement = document.createElement("article")
      squareElement.classList("decorationsquare")



/* genero una funzione */


function squareNumber(){
    const squareElement = document.createElement("article")
      squareElement.classList.add("decorationsquare")
}
for(let i = 0; i < userNumber; i++){

}