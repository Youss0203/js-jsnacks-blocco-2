/*Cliccando su un pulsante, viene avviato un cronometro. Per fermare il cronometro, 
bisogna cliccare su un secondo pulsante*/

const btnStartElement=document.getElementById("start-crono");
const btnStopELement=document.getElementById("stop-crono")
const secondsOutput=document.getElementById("seconds")

let clock;
btnStartElement.addEventListener("click", function(){
    clock = setInterval(function(){
        secondsOutput.innerHTML =parseInt(secondsOutput.innerText,10)+1;
    },1000)
})

btnStopELement.addEventListener("click" , function(){
    clearInterval(clock)
})