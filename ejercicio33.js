require('colors')
const readline = require('readline-sync')

/* 33. Subir nota a cada estudiante
_Tema: modificación con `for`_
let notas = [60, 70, 80]
Agrega 5 puntos a cada nota y muestra el nuevo arreglo. */

let notas = [60, 70, 80]
let suma = 0


suma = notas.map((not) => not + 5)


console.log('Notas originales: '.yellow + notas)
console.log('Se le sumarion 5 puntos a cada nota; '.green + suma)
