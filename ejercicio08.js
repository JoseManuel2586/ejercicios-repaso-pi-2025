require('colors')

/* 8. Conversión de temperatura
_Tema: expresiones matemáticas_
let celsius = 30
Convierte a Fahrenheit usando la fórmula: `(celsius × 9/5) + 32` */

let celsius = 30

let fahrenheit = (celsius * ( 9 / 5 )) + 32

console.log(celsius + ' grados Celsius equivalen a '.blue + fahrenheit + ' grados Fahrenheit'.yellow)