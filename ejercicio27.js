require('colors')
const readline = require('readline-sync')

/* 27. Juego del número secreto
_Tema: `do...while` con condición_
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1
console.log(`El número secreto es: ${NUMERO_SECRETO}`)
Crea un juego que pide números hasta adivinar el número secreto.
Muestra: `"¡Adivinaste!"` cuando el intento sea correcto.
Haz que el valor de `intento` cambie dentro del bucle. */



let numero = 0
let comparacion = 0
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1

do{
numero = Number(readline.question('Ingresa un numero hasta adivinarlo: '.yellow))
comparacion = numero == NUMERO_SECRETO

}while(comparacion == false)

console.log('Este era el número secreto' + NUMERO_SECRETO)
console.log("Adivinaste".green)