require('colors')
const readline = require('readline-sync')

/* 38. Verificar si un número es par
_Tema: función condicional_
Crea una función esPar(numero). La función debe retornar `true` si el número es par, o `false` si es impar.
Prueba la función con el número `7`. */


function esPar(numero){
    const par = numero % 2
    let resultado = par == 0
    console.log(resultado ? "El numero es Par".green : "El numero no es Par".red)
}

let numero = Number(readline.question(`Ingrese un numero: `.blue))

esPar(numero)