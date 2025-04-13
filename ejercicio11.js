require('colors')

/* 11. Puede conducir o no
_Tema: operadores lógicos `&&`_
let edad = 22
let tieneLicencia = true
Usa una condición para verificar si puede conducir. */


let edad = 22
let tieneLicencia = true

let puedeConducir = edad > 18 && tieneLicencia == true
let resultado = puedeConducir ? "puede conducir".green : "no puede conducir".red

console.log(`La persona: ${resultado}`)

