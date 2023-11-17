/*Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e 
una lista di cognomi, e da questi due array distinti vuole generare 
una falsa lista di invitati con nome e cognome.*/


/* iniziamo con il creare i due array */

const arrayNomi =["Gianmarco","Erlingo","Cristiano","Whispots","Pedro"];
const arrayCognomi =["Tocco","Matara","Pacchetto","Verdi","Bluino"];


let resultingArray=[]

for(let i=0; i<arrayNomi.length;i++){
    let primoNome=arrayNomi[Math.floor(Math.random()*arrayNomi.length)]
    let secondoNome=arrayCognomi[Math.floor(Math.random()*arrayCognomi.length)];
    let listaInvitati=primoNome + "  " +secondoNome;

    resultingArray.push(listaInvitati)

    
}

console.log(resultingArray)





console.log(listaInvitati)