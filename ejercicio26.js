require('colors')
const readline = require('readline-sync')

/* 26. Suma hasta 100
_Tema: acumulador en `while`_
const numeros = [10, 15, 20, 25, 30, 5]
Usa un ciclo `while` para sumar los elementos hasta que la suma llegue o supere 100.
Imprime la suma y cuántos números usaste. */


const numeros = [10, 15, 20, 25, 30, 5, 50]
let suma = 0
let index = 0

console.log('La lista original de numeros tiene: '.yellow + numeros.length)

while(suma < 101 && index < numeros.length){
    suma += numeros[index]
    index ++
}
console.log('La cantidad de numeros utlizados fueron: '.green + index)
console.log('El resultado de la suma es: '.green + suma)
