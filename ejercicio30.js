require('colors')
const readline = require('readline-sync')


/* 30. Sumar números del arreglo
_Tema: acumulador_
const numeros = [5, 10, 15, 20]
Suma todos los elementos del arreglo usando `for`. */


const numeros = [5, 10, 15, 20]
let sumaNumeros = 0

for(let index = 0; index < numeros.length; index++){
    sumaNumeros += numeros[index]
}

console.log(`Los numeros a sumar son: ${numeros}`.yellow)
console.log(`La suma de los numeros es de: ${sumaNumeros}`.green)