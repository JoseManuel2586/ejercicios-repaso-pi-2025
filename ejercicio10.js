require('colors')

/* 10. Verificar si es par o impar
_Tema: operador módulo `%`_
let numero = 9
Muestra si el número es par o impar. */


let numero = 9

let parOimpar = numero % 2
let resultado = parOimpar == 0

let resultadoTexto = resultado ? "par" : "impar"

console.log(`El numero es: ${resultadoTexto}`.yellow)
