/*Cliccando su un pulsante, viene avviato un cronometro. Per fermare il cronometro, 
bisogna cliccare su un secondo pulsante*/

const getNewEl=document.querySelector("h1.crono")
btnStartElement=document.getElementById("start-button");
let counter=0;
btnStartElement.addEventListener("click", function(){
    setInterval(function(){
        counter++
    },1000)
    const newElement=document.createElement("p");
        getNewEl.appendChild(newElement)
})