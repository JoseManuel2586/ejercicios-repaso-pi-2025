require('colors')
const readline = require('readline-sync')

/* 32. Buscar un nombre
_Tema: búsqueda en arreglo_
const nombres = ['Ana', 'Carlos', 'Pedro', 'Lucía']
Busca si `"Lucía"` está en el arreglo.
Si está, muestra `"Nombre encontrado"`.
Si no, muestra `"Nombre no encontrado"`. */

const nombres = ['Ana', 'Carlos', 'Pedro', 'Lucia']

let contiene = nombres.includes('Lucia')


console.log('La lista de nombres es: '.yellow + nombres)
console.log('El nombre que se buscara es:'.blue + ' Lucia')
console.log(contiene ? "Nombre encontrado".green : "Nombre no encontrado".red)