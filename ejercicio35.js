require('colors')
const readline = require('readline-sync')


/** 35. Invertir un arreglo
_Tema: lógica con índices_
const numeros = [1, 2, 3, 4, 5]
Crea un nuevo arreglo con los elementos invertidos: `[5, 4, 3, 2, 1]`
**No uses `.reverse()` */


const numeros = [1, 2, 3, 4, 5]
console.log(`Arreglo original ${numeros}`.yellow)
let invertido = numeros.sort((a,b) => b - a)
console.log(`Arreglo invertido ${invertido}`.green)


