require('colors')


/* 12. Mayoría de edad 
_Tema: if-else_
let edad = 17
Si la edad es mayor o igual a 18, muestra `"Eres mayor de edad"`. Si no, muestra `"Eres menor de edad"`. */


let edad = 17

if(edad >= 18){
    console.log(`Eres mayor de edad`.green)
}else{
    console.log(`Eres menor de edad`.yellow)
}