require('colors')
const readline = require('readline-sync')

/* 31. Contar números pares
_Tema: condición dentro de `for`_
const numeros = [2, 7, 10, 15, 22, 33]
Cuenta cuántos números del arreglo son pares. */

const numeros = [2, 7, 10, 15, 22, 33]
let numerosPar = 0
let conteo = 0

for(let index = 0; index < numeros.length; index ++){
    numerosPar = numeros[index] % 2
    if(numerosPar == 0){
        conteo += 1
    }
}

console.log('Los numeros del arreglo son: '.yellow + numeros)
console.log('La cantidad de numeros que son pares es: '.green + conteo)