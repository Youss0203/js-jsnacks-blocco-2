/*Crea una funzione che accetta due elementi del dom, 
uno e' il parent e l'altro e' un elemento che voglio sia aggiunto 
al parent come figlio.*/



function aggiungiElemento(){
    const Element = document.querySelector("div.wrapper")
    const newElement =document.createElement("h1")
    Element.appendChild(newElement)
}