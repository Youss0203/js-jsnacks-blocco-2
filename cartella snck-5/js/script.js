/*Crea una funzione che accetta due elementi del dom, 
uno e' il parent e l'altro e' un elemento che voglio sia aggiunto 
al parent come figlio.*/

const wrapperElement = document.querySelector("div.wrapper")
    const newElement = document.createElement("h1")


function aggiungiElemento(elementToAdd,parentElement){
    elementToAdd.appendChild(parentElement)
}
