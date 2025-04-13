require('colors')

/* 17. Mayor de tres números
_Tema: if-else anidado_
let a = 10,
    b = 5,
    c = 7
Muestra cuál es el número mayor entre los tres. */


let a = 10
let b = 5
let c = 7


if(a > b && a > c){
    console.log(`El número mayor es: ${a}`.yellow)
}else if(b > a && b > c){
    console.log(`El número mayor es: ${b}`.yellow)
}else{
    console.log(`El número mayor es: ${c}`.yellow)
}
