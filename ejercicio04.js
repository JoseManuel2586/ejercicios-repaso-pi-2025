require('colors')
const readline = require('readline-sync')
const inquirer = require('inquirer')

/* 4. Sumar texto numérico convertido
_Tema: conversión de string a number_
let edadTexto = '25'
Convierte la variable a número y suma `5`.
Imprime el resultado final:
`"Edad más 5: 30"` */


let edadTexto = Number(readline.question(`Ingrese su edad: `.blue))
const max = 5
let resultado = edadTexto + max

console.log(`"Edad más ${max}: ${resultado}"`.green)