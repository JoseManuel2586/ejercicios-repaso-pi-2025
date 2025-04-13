require('colors')
const readline = require('readline-sync')

/* 36. Saludo personalizado
_Tema: función con parámetro, sin retorno_
Crea una función llamada `saludar(nombre)`, Debe imprimir un saludo como:
`"Hola, Juan. Bienvenido a la clase de programación."`
Llama a la función con el nombre ingresado por el usuario. */

nombre = readline.question('Ingresa tu nombre: '.blue)

function saludar(nombre){
    
    console.log(`"Hola, ${nombre}. Bienvenido a la clase de programación"`.green)
    
}

saludar(nombre)