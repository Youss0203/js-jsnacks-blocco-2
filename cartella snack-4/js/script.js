/*Crea una funzione che accetta due numeri, se il primo e' 
divisibile per il secondo, allora ritorna vero, altrimenti ritorna falso. 
Micro bonus: se sono uguali ritorna il numero.*/

const UserFirstNumber = parseInt(prompt("type a number"))
const UserSecondNumber = parseInt(prompt("type a number"))

function isNumberDivisible(numberOne, numberTwo){
if (numberOne / numberTwo) {
    return true;
} else { 
    return false; 
}
}

if(isNumberDivisible(UserFirstNumber,UserFirstNumber)){
    console.log(UserFirstNumber,UserSecondNumber)
}else if(UserFirstNumber / UserSecondNumber){
    console.log(true)
}else{
    console.log(false)
}