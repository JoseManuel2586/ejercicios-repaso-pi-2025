require('colors')
const readline = require('readline-sync')


/* 29. Imprimir lista de frutas
_Tema: `for` básico_
const frutas = ['Manzana', 'Banano', 'Uva', 'Fresa', 'Sandía']
Imprime cada fruta en una línea usando un ciclo `for`. */

const frutas = ['Manzana', 'Banano', 'Uva', 'Fresa', 'Sandia']

for(let index = 0; index < frutas.length; index ++){
    console.log((index + 1) + '.' + ' ' +frutas[index])
}
