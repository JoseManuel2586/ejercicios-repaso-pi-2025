require('colors')

/* 9. Comparación entre dos números
_Tema: operadores de comparación_
let numeroA = 15
let numeroB = 20
Muestra si `numeroA` es mayor, menor o igual que `numeroB`. */


let numeroA = 15
let numeroB = 20

let comparacionNumeros = numeroA > numeroB
let resultado = comparacionNumeros ? "es mayor" : "es menor"

console.log(`El numeroA ${resultado} que el numeroB`.green)