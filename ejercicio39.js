require('colors')
const readline = require('readline-sync')

/* 39. Suma de arreglo
_Tema: función con arreglo como parámetro_
Crea una función `sumarArreglo(arreglo)`. Debe retornar la suma total de los números ingresados por el usuario según un menú interactivo 
que permita ingresar un número y luego preguntar si desea ingresar más números hasta que ya no desee ingresar más números y que muestre la suma.
Utiliza `push` para ingresar cada número dado por el usuario. */

let sumar = 0

function sumarArreglo(arreglo){
for(let index = 0; index < arreglo.length; index ++){
    sumar += arreglo[index]  
}
    return sumar
}


const arreglo = [] 
let numerosIngreso = 0
let pregunta = 0

do{
    numerosIngreso = Number(readline.question('Ingrese un numero: '.blue))
    arreglo.push(numerosIngreso)
    pregunta = readline.question('Desea ingresar otro numero s/n: '.yellow)
    switch(pregunta){
        case 's':
        break
        case 'n':
        break
        default:
            console.log(`El valor que ingreso no es correcto solo puede ingresar s o n`.red)
    }

}while(pregunta != 'n')

let resultado = sumarArreglo(arreglo)
console.log(`La suma de los numero ingresados es de: ${resultado}`.green)