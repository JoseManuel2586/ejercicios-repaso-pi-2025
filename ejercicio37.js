require('colors')
const readline = require('readline-sync')

/* 37. Área de un triángulo
_Tema: función con retorno_
Crea una función calcularAreaTriangulo(base, altura). Debe retornar el área usando la fórmula `(base * altura) / 2`.
Llama a la función con los valores ingresados por el usuario e imprime el resultado. */


function calcularAreaTringua(base,altura){
    const area = base * altura 
    return area
}


let base = readline.question(`Ingrese la base: `.blue)
let altura = readline.question(`Ingrese la altura: `.blue)

let resultado = calcularAreaTringua(base,altura)

console.log('El area es de: '.yellow + resultado)