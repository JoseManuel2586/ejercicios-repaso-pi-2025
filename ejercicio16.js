require('colors')

/* 16. Ingreso a evento
_Tema: operadores lógicos_
let tieneEntrada = true
let estaEnLista = false
Muestra `"Puede ingresar"` solo si tiene entrada **y** está en lista. Si no, muestra `"Acceso denegado"`. */


let tieneEntrada = true
let estaEnLista = false

if(tieneEntrada == true && estaEnLista == true){
    console.log(`Puede ingresar`.green)
}else{
    console.log(`Acceso denegado`.red)
}